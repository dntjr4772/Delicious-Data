package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class SearchService {
    public static final Logger logger = LoggerFactory.getLogger(SearchService.class);
    private final StoreRepository storeRepository;
    private final ModelMapper modelMapper;
    public BaseMessage search(String name){
        List<Store> list=storeRepository.findByStoreNameContaining(name);
        List<StoreDto.StoreResponse> dtoList=new ArrayList<>();
        for(Store store : list)
            dtoList.add(modelMapper.map(store,StoreDto.StoreResponse.class));
        return new BaseMessage(HttpStatus.OK,dtoList);
    }
}
