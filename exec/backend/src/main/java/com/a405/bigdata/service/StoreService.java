package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.bhours.Bhours;
import com.a405.bigdata.domain.bhours.BhoursDto;
import com.a405.bigdata.domain.menu.Menu;
import com.a405.bigdata.domain.menu.MenuDto;
import com.a405.bigdata.domain.review.Review;
import com.a405.bigdata.domain.review.ReviewDto;
import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.store.StoreDto;
import com.a405.bigdata.domain.store.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreService {
    public static final Logger logger = LoggerFactory.getLogger(SearchService.class);
    private final StoreRepository storeRepository;
    private final ModelMapper modelMapper;

    public BaseMessage retrieveStore(Long storeId) {
        List<Store> storeList=storeRepository.findAllJoinFetch(storeId);
        List<StoreDto.StoreInfoResponse> storeDtoList=new ArrayList<>();
        for (Store store : storeList){
            System.out.println("store.getStoreName() = " + store.getStoreName());
            StoreDto.StoreInfoResponse storeInfoResponse=modelMapper.map(store, StoreDto.StoreInfoResponse.class);
            //Bhour 세팅
            List<BhoursDto.hours> hoursList=new ArrayList<>();
            for(Bhours bhours : store.getBhours()) {
                hoursList.add(modelMapper.map(bhours, BhoursDto.hours.class));
                System.out.println("bhours.getStartTime() = " + bhours.getStartTime());
            }
            storeInfoResponse.setHours(hoursList);
            //메뉴 세팅
            List<MenuDto.ResponseMenu> menus=new ArrayList<>();
            for (Menu menu : store.getMenus())
                menus.add(modelMapper.map(menu,MenuDto.ResponseMenu.class));
            storeInfoResponse.setMenus(menus);
            //식당 리뷰 세팅
            List<ReviewDto.ResponseReview> reviews=new ArrayList<>();
            for (Review review : store.getReviews())
                reviews.add(modelMapper.map(review,ReviewDto.ResponseReview.class));
            storeInfoResponse.setReviews(reviews);
            storeDtoList.add(storeInfoResponse);
        }
        return new BaseMessage(HttpStatus.OK,storeDtoList);
    }

    public BaseMessage retrieveStoreTest(Long storeId) {
        List<Store> storeList=storeRepository.findAllJoinFetch(storeId);
        List<StoreDto.StoreInfoResponseTest> storeDtoList=new ArrayList<>();
        for (Store store : storeList){
            StoreDto.StoreInfoResponseTest storeInfoResponse=modelMapper.map(store, StoreDto.StoreInfoResponseTest.class);
            System.out.println("storeInfoResponse = " + storeInfoResponse);
            storeDtoList.add(storeInfoResponse);
        }
        return new BaseMessage(HttpStatus.OK,storeDtoList);
    }
}
