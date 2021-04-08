package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.review.ReviewDto;
import com.a405.bigdata.service.ReviewService;
import com.a405.bigdata.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    public static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

    @PostMapping
    public ResponseEntity createReview(@RequestBody ReviewDto.CreateReviewRequest request){
        BaseMessage bm=reviewService.writeReview(request);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }
}
