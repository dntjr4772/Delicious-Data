package com.a405.bigdata.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
//@ActiveProfiles("test")
@Ignore
public class BaseControllerTest {

//    @Autowired
//    private WebApplicationContext ctx;

    @Autowired
    protected  MockMvc mockMvc;

    @Autowired
    protected  ObjectMapper objectMapper;

//    @Before
//    public void setup() {
//        mockMvc = MockMvcBuilders.webAppContextSetup(ctx)
//                .addFilters(new CharacterEncodingFilter("UTF-8", true))  // 필터 추가
//                .build();
//    }

}
