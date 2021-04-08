package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.service.SearchService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/search")
@RequiredArgsConstructor
@Api
public class SearchController {
    private final SearchService searchService;
    //비로그인 상태
//    @GetMapping("/logout/{name}")
//    public ResponseEntity search(@PathVariable String name){
//        BaseMessage bm =searchService.search(name);
//        return new ResponseEntity(bm,bm.getHttpStatus());
//    }

    /**
     * 위치로부터 가장 가까운 식당 30개 반환
     * @param location
     * @ return 식당 30개
     */
    //비로그인 상태
    @GetMapping("/logout/location/{location}")
    public ResponseEntity searchByLocation(@PathVariable String location){
        BaseMessage bm =searchService.searchByLocation(location);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }

    /**
     * 평점 평균이 가장 높은 식당 30개 반환
     * @param location
     * @ return 식당 30개
     */
    //비로그인 상태
    @GetMapping("/logout/review/{location}")
    public ResponseEntity searchByReview(@PathVariable String location){
        BaseMessage bm =searchService.searchByReview(location);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }

    /**
     * 평점 metrix를 이용한 식당 30개 추천 (자이썬을 통한 파이썬 코드 실행)
     * @param location
     * @ return 식당 30개
     */
    //로그인 상태(BD 측으로 식당 id 30개 전달)
    @GetMapping("/login/location/{location}")
    public ResponseEntity searchByLocationWithLogin(@PathVariable String location){
        BaseMessage bm =searchService.searchByLocationWithLogin(location);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }


}
