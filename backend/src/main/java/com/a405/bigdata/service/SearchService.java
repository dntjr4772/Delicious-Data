package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.store.StoreDto;
import com.a405.bigdata.domain.store.StoreRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.*;
import lombok.RequiredArgsConstructor;
import org.apache.commons.httpclient.HttpClient;
import org.apache.http.HttpResponse;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.net.URLEncoder;
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
        Double[] loc=geoCoding(location);
        if(loc!=null) {
            System.out.println("location = " + loc[0] + " " + loc[1]);
            //Double[] loc={37.406284,127.116425};
            Pageable pageable = PageRequest.of(0, 30);
            Page<Store> stores = storeRepository.getNearByRestaurants(loc[0], loc[1], pageable);
            List<StoreDto.SearchStoreResponse> dtoList = new ArrayList<>();
            for (Store store : stores) {
                StoreDto.SearchStoreResponse storeDto = modelMapper.map(store, StoreDto.SearchStoreResponse.class);
                dtoList.add(storeDto);
            }
            return new BaseMessage(HttpStatus.OK, dtoList);
        }
        return new BaseMessage(HttpStatus.BAD_REQUEST);
    }

    public Double[] geoCoding(String location) {
        try {
            CloseableHttpClient client = HttpClientBuilder.create().build();
            String addr= URLEncoder.encode(location,"utf-8");
            HttpGet getRequest = new HttpGet("https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query="+addr);
            getRequest.setHeader("X-NCP-APIGW-API-KEY-ID", "9km6mym3jn");
            getRequest.setHeader("X-NCP-APIGW-API-KEY", "fo12dhCCyHjhNgVBIaeTJ4JBBvzdIrzO6gNRJSnR");

            HttpResponse response = client.execute(getRequest);
            //Response 출력
            if (response.getStatusLine().getStatusCode() == 200) {
                ResponseHandler<String> handler = new BasicResponseHandler();
                String body = handler.handleResponse(response);
                return jsonParsing(body);
            } else {
                logger.info("response is error: {}", response.getStatusLine().getStatusCode());
                return null;
            }

        } catch (Exception e) {
            logger.info("error: {}", e.toString());
            return null;
        }
    }

    private Double[] jsonParsing(String bodyJson) {
        JSONObject jObject = new JSONObject(bodyJson);
        JSONArray jArray = jObject.getJSONArray("addresses");
        JSONObject obj = jArray.getJSONObject(0);
        double x=Double.parseDouble(obj.getString("x"));
        double y=Double.parseDouble(obj.getString("y"));
        Double[] loc= {y,x};
        return loc;
    }


//    public static Float[] geoCoding(String location) {
//        if (location == null)
//            return null;
//        System.out.println("location = " + location);
//        Geocoder geocoder = new Geocoder();
//        // setAddress : 변환하려는 주소 (경기도 성남시 분당구 등)
//        // setLanguate : 인코딩 설정
//        GeocoderRequest geocoderRequest = new GeocoderRequestBuilder().setAddress(location).setLanguage("ko").getGeocoderRequest();
//
//        try {
//            GeocodeResponse geocoderResponse = geocoder.geocode(geocoderRequest);
//            System.out.println("geocoderResponse.getStatus() "+ geocoderResponse.getStatus());
//            if (geocoderResponse.getStatus() == GeocoderStatus.OK & !geocoderResponse.getResults().isEmpty()) {
//
//                GeocoderResult geocoderResult=geocoderResponse.getResults().iterator().next();
//                LatLng latitudeLongitude = geocoderResult.getGeometry().getLocation();
//
//                Float[] coords = new Float[2];
//                coords[0] = latitudeLongitude.getLat().floatValue();
//                coords[1] = latitudeLongitude.getLng().floatValue();
//                return coords;
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//        System.out.println("null!!!");
//        return null;
//    }

}