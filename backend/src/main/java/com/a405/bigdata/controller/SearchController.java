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
    @GetMapping("/logout/{name}")
    public ResponseEntity search(@PathVariable String name){
        BaseMessage bm =searchService.search(name);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }
}
