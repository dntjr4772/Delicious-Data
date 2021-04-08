package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserDto;
import org.junit.Test;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest extends BaseControllerTest {
    @Test
    public void Account_생성_성공() throws Exception {
        //Given
        char gender = '남';
        int bornYear=1995;
        String email = "test@naver.com";
        String nickname="dd우석";
        //When
        UserDto.CreateAccountRequest createAccountRequest = UserDto.CreateAccountRequest.builder()
                .gender(gender)
                .bornYear(bornYear)
                .email(email)
                .nickname(nickname)
                .build();

        mockMvc.perform(post("/api/accounts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(createAccountRequest)))
                .andExpect(status().isCreated())
                .andDo(print());
    }

}