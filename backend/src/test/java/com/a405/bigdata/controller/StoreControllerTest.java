package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import org.junit.Test;
import org.springframework.http.MediaType;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class StoreControllerTest extends BaseControllerTest {
    @Test
    public void Store_조회_성공()  throws Exception {
        Long storeid=86L;
        mockMvc.perform(get("/api/store/"+storeid)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }
}