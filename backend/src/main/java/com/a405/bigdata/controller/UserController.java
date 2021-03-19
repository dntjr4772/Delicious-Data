package com.a405.bigdata.controller;

import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserDto;
import com.a405.bigdata.domain.user.UserRepository;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/accounts")
@RequiredArgsConstructor
@Api
public class UserController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    //private final ModelMapper modelMapper;
    private final UserRepository accountRepository;

    //---------------------------------- 회원 생성 ------------------------------------------------

    @PostMapping
    public ResponseEntity createAccount(@RequestBody UserDto.CreateAccountRequest createAccountRequest)
    {
        User account = createAccountRequest.toEntity();
        accountRepository.save(account);
        return new ResponseEntity(createAccountRequest,HttpStatus.CREATED);
    }
}
