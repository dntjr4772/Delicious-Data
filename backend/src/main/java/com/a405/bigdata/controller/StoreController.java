package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/store")
@RequiredArgsConstructor
public class StoreController {
    private final StoreService storeService;
    public static final Logger logger = LoggerFactory.getLogger(StoreController.class);

    @GetMapping("/{storeId}")
    public ResponseEntity retrieveStore(@PathVariable Long storeId){
        BaseMessage bm=storeService.retrieveStore2(storeId);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }
}
