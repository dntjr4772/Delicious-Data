package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    public static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    private final JwtService jwtService;

    //내정보
    public BaseMessage findUserById(String token)
    {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            Long myId = jwtService.getUserId(token);
            Optional<User> user = userRepository.findById(myId);

            return  new BaseMessage(HttpStatus.OK, user);

        }catch (Exception e)
        {
            resultMap.put("errors",e);
            logger.info("errors : ",e);
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
    }
}
