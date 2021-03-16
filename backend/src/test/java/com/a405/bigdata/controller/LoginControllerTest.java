package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import com.a405.bigdata.domain.user.UserDto;
import org.junit.Test;
import org.springframework.http.MediaType;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class LoginControllerTest extends BaseControllerTest {
    //---------------------------------로그인-------------------------------------------

    @Test
    public void Login_이메일요청_성공() throws Exception {

        UserDto.LoginRequest user = new UserDto.LoginRequest();
        user.setAct("login-request");
        user.setEmail("test@naver.com");

        mockMvc.perform(post("/api/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andDo(print());
    }
}