package com.a405.bigdata.domain.user;

import lombok.Builder;
import lombok.Data;

public class UserDto {
    @Data
    @Builder
    //계정 생성 요청
    public static class CreateAccountRequest
    {
        private char gender;
        private int bornYear;
        public User toEntity()
        {
            return User.builder()
                    .gender(this.gender)
                    .bornYear(this.bornYear)
                    .build();
        }
    }
}
