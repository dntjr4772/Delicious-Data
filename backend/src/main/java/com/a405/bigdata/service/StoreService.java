package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.bhours.BhoursDto;
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
            System.out.println("store = " + store.getBhours().getEndTime());
            StoreDto.StoreInfoResponse storeInfoResponse=modelMapper.map(store, StoreDto.StoreInfoResponse.class);
            storeInfoResponse.setHours(modelMapper.map(store.getBhours(), BhoursDto.hours.class));
            storeDtoList.add(storeInfoResponse);
        }

        return new BaseMessage(HttpStatus.OK,storeDtoList);

    }
}
