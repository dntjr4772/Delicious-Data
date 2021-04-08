package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import com.a405.bigdata.domain.review.ReviewDto;
import org.junit.Test;
import org.springframework.http.MediaType;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ReviewControllerTest extends BaseControllerTest {
    @Test
    public void createReview_성공() throws Exception {
        ReviewDto.CreateReviewRequest request=ReviewDto.CreateReviewRequest.builder()
                .userId(1L)
                .storeId(1L)
                .taste(4)
                .clean(5)
                .service(3)
                .content("최고!")
                .build();
        mockMvc.perform(post("/api/review")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andDo(print());
    }
}