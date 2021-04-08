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

    @GetMapping("/{storeid}")
    public ResponseEntity retrieveStore(@PathVariable Long storeid){
        BaseMessage bm=storeService.retrieveStoreTest(storeid);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }
}
