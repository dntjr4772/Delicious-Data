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
import org.springframework.beans.BeanUtils;
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

    /**
     * BeanUtils.copyProperties 사용했을때
     */
    public BaseMessage retrieveStore1(Long storeId) {
        List<Store> storeList=storeRepository.findAllJoinFetch(storeId);
        List<StoreDto.StoreInfoResponse> storeDtoList=new ArrayList<>();

        for (Store store : storeList){
            StoreDto.StoreInfoResponse storeInfoResponse=new StoreDto.StoreInfoResponse();
            BeanUtils.copyProperties(store,storeInfoResponse);

            //Bhour 세팅
            List<BhoursDto.hours> hoursList=new ArrayList<>();
            BhoursDto.hours hoursDto=new BhoursDto.hours();
            for(Bhours bhours : store.getBhours()) {
                BeanUtils.copyProperties(bhours,hoursDto);
                hoursList.add(hoursDto);
            }
            storeInfoResponse.setBhours(hoursList);

            //메뉴 세팅
            List<MenuDto.ResponseMenu> menus=new ArrayList<>();

            for (Menu menu : store.getMenus()) {
                MenuDto.ResponseMenu menuDto=new MenuDto.ResponseMenu();
                BeanUtils.copyProperties(menu,menuDto);
                menus.add(menuDto);
            }
            storeInfoResponse.setMenus(menus);

            //식당 리뷰 세팅
            List<ReviewDto.ResponseReview> reviews=new ArrayList<>();

            for (Review review : store.getReviews()) {
                ReviewDto.ResponseReview reviewDto=new ReviewDto.ResponseReview();
                BeanUtils.copyProperties(review,reviewDto);
                reviews.add(reviewDto);
            }
            storeInfoResponse.setReviews(reviews);
            //최종 list에 넣기
            storeDtoList.add(storeInfoResponse);
        }
        return new BaseMessage(HttpStatus.OK,storeDtoList);
    }

    /**
     * modelMapper 사용했을때
     */
    public BaseMessage retrieveStore2(Long storeId) {
        List<Store> storeList=storeRepository.findAllJoinFetch(storeId);
        List<StoreDto.StoreInfoResponse> storeDtoList=new ArrayList<>();
        for (Store store : storeList){
            StoreDto.StoreInfoResponse storeInfoResponse=modelMapper.map(store, StoreDto.StoreInfoResponse.class);
            storeDtoList.add(storeInfoResponse);
        }
        return new BaseMessage(HttpStatus.OK,storeDtoList);
    }
    /**
     * @JsonManagedReference, @JsonBackReference 사용했을때
     */
    public BaseMessage retrieveStore3(Long storeId) {
        List<Store> storeList=storeRepository.findAllJoinFetch(storeId);
        return new BaseMessage(HttpStatus.OK,storeList);
    }


}
