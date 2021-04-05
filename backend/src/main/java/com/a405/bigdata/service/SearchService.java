package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.store.StoreDto;
import com.a405.bigdata.domain.store.StoreRepository;
import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;

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

    public BaseMessage searchByLocation(String location){
        Float[] loca=geoCoding(location);
        System.out.println("loc = " + loca);
        Double[] loc={37.406284,127.116425};
        Pageable pageable = PageRequest.of(0, 30);
        Page<Store> stores=storeRepository.getNearByRestaurants(loc[0],loc[1],pageable);
        List<StoreDto.StoreWithDistance> dtoList=new ArrayList<>();
        for(Store store : stores) {
            StoreDto.StoreWithDistance storeDto=modelMapper.map(store,StoreDto.StoreWithDistance.class);
            dtoList.add(storeDto);
        }
        return new BaseMessage(HttpStatus.OK,dtoList);
    }
    public static Float[] geoCoding(String location) {
        if (location == null)
            return null;
        System.out.println("location = " + location);
        Geocoder geocoder = new Geocoder();
        // setAddress : 변환하려는 주소 (경기도 성남시 분당구 등)
        // setLanguate : 인코딩 설정
        GeocoderRequest geocoderRequest = new GeocoderRequestBuilder().setAddress(location).setLanguage("ko").getGeocoderRequest();

        try {
            GeocodeResponse geocoderResponse = geocoder.geocode(geocoderRequest);
            System.out.println("geocoderResponse.getStatus() "+ geocoderResponse.getStatus());
            if (geocoderResponse.getStatus() == GeocoderStatus.OK & !geocoderResponse.getResults().isEmpty()) {

                GeocoderResult geocoderResult=geocoderResponse.getResults().iterator().next();
                LatLng latitudeLongitude = geocoderResult.getGeometry().getLocation();

                Float[] coords = new Float[2];
                coords[0] = latitudeLongitude.getLat().floatValue();
                coords[1] = latitudeLongitude.getLng().floatValue();
                return coords;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        System.out.println("null!!!");
        return null;
    }

}