package com.a405.bigdata.domain.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Email;

public class UserDto {
    @Data
    @Builder
    //계정 생성 요청
    public static class CreateAccountRequest
    {
        private char gender;
        private int bornYear;
        private String email;
        private String nickname;
        public User toEntity()
        {
            return User.builder()
                    .gender(this.gender)
                    .bornYear(this.bornYear)
                    .email(this.email)
                    .nickname(this.nickname)
                    .build();
        }
    }
    @Data
    public static class LoginRequest {
        private String act;

        @Email(message = "알맞은 이메일 형식이 아닙니다.")
        private String email;
        private String authKey;
    }
}
