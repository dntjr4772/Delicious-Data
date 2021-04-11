package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseControllerTest;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class SearchControllerTest extends BaseControllerTest {

    @Test
    public void Search_동작_성공() throws Exception {
        //When
        String storeName="1.5닭갈비";

        mockMvc.perform(get("/api/search/logout/"+storeName)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void searchByLocation_동작_성공() throws Exception {
        //When
        String location="창천동";

        mockMvc.perform(get("/api/search/logout/location/"+location)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void searchByReview_동작_성공() throws Exception {
        //When
        String location="신촌동";

        mockMvc.perform(get("/api/search/logout/review/"+location)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void searchByLocationWithLogin_동작_성공() throws Exception {
        //When
        String location="창천동";

        mockMvc.perform(get("/api/search/login/location/"+location)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }



}