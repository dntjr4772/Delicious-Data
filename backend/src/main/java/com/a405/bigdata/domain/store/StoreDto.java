package com.a405.bigdata.domain.store;

import lombok.Builder;
import lombok.Data;

public class StoreDto {
    @Data
    @Builder
    //가게 생성 요청
    public static class CreateStoreRequest
    {
        private String storeName;
        private String branch;
        private String area;
        private String tel;
        private String address;
        private Long latitude;
        private Long longitude;
        private String storeImage;
    }
}
