package com.a405.bigdata.domain.store;

import com.a405.bigdata.domain.bhours.Bhours;
import com.a405.bigdata.domain.bhours.BhoursDto;
import com.a405.bigdata.domain.menu.Menu;
import com.a405.bigdata.domain.menu.MenuDto;
import com.a405.bigdata.domain.review.Review;
import com.a405.bigdata.domain.review.ReviewDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
        private Double latitude;
        private Double longitude;
        private String category;
        private String storeImage;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class SearchStoreResponse
    {
        private Long id;
        private String storeName;
        private String branch;
        private String area;
        private String tel;
        private String address;
        private String category;
        private String storeImage;
        private Double tasteAvg;
        private Double cleanAvg;
        private Double serviceAvg;
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
        private Double latitude;
        private Double longitude;
        private String category;
        private String storeImage;
        private List<BhoursDto.hours> bhours;
        private List<MenuDto.ResponseMenu> menus;
        private List<ReviewDto.ResponseReview> reviews;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class StoreInfoResponseTest
    {
        private Long id;
        private String storeName;
        private String branch;
        private String area;
        private String tel;
        private String address;
        private Double latitude;
        private Double longitude;
        private String category;
        private String storeImage;
        private List<Bhours> hours;
        private List<Menu> menus;
        private List<Review> reviews;
    }
}
