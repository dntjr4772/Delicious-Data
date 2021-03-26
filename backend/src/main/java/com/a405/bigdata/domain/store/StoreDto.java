package com.a405.bigdata.domain.store;

import com.a405.bigdata.domain.bhours.Bhours;
import com.a405.bigdata.domain.bhours.BhoursDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class StoreResponse
    {
        private Long id;
        private String storeName;
        private String branch;
        private String area;
        private String tel;
        private String address;
        private Long latitude;
        private Long longitude;
        private String category;
        private String storeImage;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class StoreInfoResponse
    {
        private Long id;
        private String storeName;
        private String branch;
        private String area;
        private String tel;
        private String address;
        private Long latitude;
        private Long longitude;
        private String category;
        private String storeImage;
        private BhoursDto.hours hours;

    }
}
