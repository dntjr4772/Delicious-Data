package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.store.StoreDto;
import com.a405.bigdata.domain.store.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.apache.http.HttpResponse;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.python.core.PyArray;
import org.python.core.PyFunction;
import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;
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
    private PythonInterpreter interpreter;
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


    public BaseMessage searchByReview(String location) {
        Double[] loc=geoCoding(location);
        if(loc!=null) {
            Pageable pageable = PageRequest.of(0, 30);
            Page<Store> stores = storeRepository.getNearByRestaurants(loc[0], loc[1], pageable);
            List<StoreDto.SearchStoreResponse> dtoList = new ArrayList<>();
            for (Store store : stores) {
                StoreDto.SearchStoreResponse storeDto = modelMapper.map(store, StoreDto.SearchStoreResponse.class);
                dtoList.add(storeDto);
            }
            Collections.sort(dtoList, new Comparator<StoreDto.SearchStoreResponse>() {
                @Override
                public int compare(StoreDto.SearchStoreResponse o1, StoreDto.SearchStoreResponse o2) {
                    Double a=o2.getServiceAvg()+ o2.getCleanAvg()+ o2.getTasteAvg();
                    Double b=o1.getServiceAvg()+ o1.getCleanAvg()+ o1.getTasteAvg();
                    return a.compareTo(b);
                }
            });
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

    public BaseMessage searchByLocationWithLogin(String location) {
        Double[] loc=geoCoding(location);
        if(loc!=null) {
            //Double[] loc={37.406284,127.116425};
            Pageable pageable = PageRequest.of(0, 30);
            Page<Store> stores = storeRepository.getNearByRestaurants(loc[0], loc[1], pageable);
            List<Long> storeIdList = new ArrayList<>();
            for (Store store : stores)
                storeIdList.add(store.getId());
            interpreter=new PythonInterpreter();
            interpreter.execfile("src/main/python/userStoreMatrix.py");
            PyFunction pyFunction=(PyFunction) interpreter.get("storeList",PyFunction.class);
            PyObject pyObject=pyFunction.__call__((PyObject) storeIdList);
            logger.info(pyObject.toString());
            return new BaseMessage(HttpStatus.OK, pyObject.toString());
        }
        return new BaseMessage(HttpStatus.BAD_REQUEST);
    }

}