package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.review.Review;
import com.a405.bigdata.domain.review.ReviewDto;
import com.a405.bigdata.domain.review.ReviewRepository;
import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.store.StoreRepository;
import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    public static final Logger logger = LoggerFactory.getLogger(ReviewService.class);
    private final StoreRepository storeRepository;
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;

    public BaseMessage writeReview(ReviewDto.CreateReviewRequest request) {

        Store store=storeRepository.findById(request.getStoreId()).orElseThrow(NullPointerException::new);
        //store 점수 3개 갱신
        int cnt=store.getReviewCnt();
        Double tasteAvg=store.getTasteAvg();
        Double cleanAvg=store.getCleanAvg();
        Double serviceAvg=store.getServiceAvg();

        tasteAvg=(tasteAvg*cnt+request.getTaste())/(cnt+1);
        cleanAvg=(cleanAvg*cnt+request.getClean())/(cnt+1);
        serviceAvg=(serviceAvg*cnt+request.getService())/(cnt+1);
        store.UpdateReview(tasteAvg,cleanAvg,serviceAvg);
        // TODO: 2021-04-07 생략해도 될듯
        storeRepository.save(store);
        //review 추가
        Review review=request.toEntity();
        User user=userRepository.findById(request.getStoreId()).get();
        review.addReviewStore(store);
        review.addReviewWriter(user);
        reviewRepository.save(review);
        return new BaseMessage(HttpStatus.OK);
    }
}
