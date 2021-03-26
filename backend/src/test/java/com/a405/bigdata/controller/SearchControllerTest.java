package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import org.junit.Test;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class SearchControllerTest extends BaseControllerTest {

    @Test
    public void Search_동작_성공() throws Exception {
        //When
        String storeName="해녀촌식당";

        mockMvc.perform(get("/api/search/logout/"+storeName)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());

    }
}