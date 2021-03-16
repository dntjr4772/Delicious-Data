package com.a405.bigdata.controller;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.user.UserDto;
import com.a405.bigdata.service.JwtService;
import com.a405.bigdata.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

//http://localhost:8080/swagger-ui.html

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    public static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid UserDto.LoginRequest loginRequest) {
        BaseMessage bm = loginService.login(loginRequest);
        return new ResponseEntity(new BaseMessage(bm.getHttpStatus(),bm.getData()),bm.getHeaders(),bm.getHttpStatus());
    }

    @PostMapping("/auto-login")
    public ResponseEntity autoLogin(@RequestBody @Valid UserDto.LoginRequest loginRequest,@RequestHeader(value = "Authorization") String token) {

        BaseMessage bm = loginService.autoLogin(loginRequest,token);
        return new ResponseEntity(bm,bm.getHttpStatus());
    }
}