package com.a405.bigdata.domain.review;

import com.a405.bigdata.domain.menu.Menu;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class ReviewDto {
    @Data
    @Builder
    //리뷰 생성 요청
    public static class CreateReviewRequest
    {
        private long userId;
        private long storeId;
        private int taste;
        private int clean;
        private int service;
        private String content;
        public Review toEntity(){
            return Review.builder()
                    .taste(taste)
                    .clean(clean)
                    .service(service)
                    .content(content)
                    .build();
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ResponseReview{
        private int taste;
        private int clean;
        private int service;
        private String content;
        private String reviewImage;
        private Date regTime;
    }
}
