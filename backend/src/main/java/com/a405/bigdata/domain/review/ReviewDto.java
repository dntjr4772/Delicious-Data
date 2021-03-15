package com.a405.bigdata.domain.review;

import com.a405.bigdata.domain.menu.Menu;
import lombok.Builder;
import lombok.Data;

public class ReviewDto {
    @Data
    @Builder
    //리뷰 생성 요청
    public static class CreateReviewRequest
    {
        private int totalScore;
        private String content;

    }
}
