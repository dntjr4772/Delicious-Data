package com.a405.bigdata.service;

import com.a405.bigdata.common.BaseMessage;
import com.a405.bigdata.domain.user.Role;
import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserDto;
import com.a405.bigdata.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class LoginService {

    @Value("${token.signiturekey}")
    private String signature ;

    public static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtService jwtService;
    private final EmailService emailService;

    //존재하는 이메일 여부 판정
    private Boolean IsExistUserEmail(UserDto.LoginRequest loginRequest)
    {
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if(user==null)
            return false;
        return true;
    }

    @Transactional
    public BaseMessage login(UserDto.LoginRequest loginRequest)
    {
        Map<String, Object> resultMap = new HashMap<>();
        if(!IsExistUserEmail(loginRequest))
        {
            resultMap.put("errors","존재하지 않는 이메일입니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
        String act = loginRequest.getAct();
        switch (act)
        {
            case "login-request":
                logger.info(loginRequest.getEmail()+"로 이메일 성공적으로 보냄");
                return loginRequest(loginRequest);
            //break;
            case "check-authKey-off":
                logger.info("인증키 일치여부가 확인되었습니다.");
                return checkAuthKeyOff(loginRequest);
            case "check-authKey-on":
                logger.info("토큰이 발행되었습니다.");
                return checkAuthKeyOn(loginRequest);
        }
        resultMap.put("errors","존재하지 않는 명령어입니다.");
        return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
    }

    @Transactional
    public BaseMessage loginRequest(UserDto.LoginRequest request)
    {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("Authorization","default");

            User user = userRepository.findByEmail(request.getEmail());
            logger.info("user "+ user.getEmail());
            String authCode = emailService.createEmailCode();

            //db에 저장
            user.changeAuthKey(authCode);
            emailService.sendMail(user.getEmail(),authCode);

            resultMap.put("message","성공적으로 메일이 전송되었습니다.");
            return new BaseMessage(HttpStatus.OK,httpHeaders,resultMap);
        }catch (Exception e)
        {
            logger.error(e.getMessage());
            resultMap.put("error", "존재하지 않는 계정정보입니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
    }

    @Transactional
    public BaseMessage checkAuthKeyOff(UserDto.LoginRequest request) {

        Map<String, Object> resultMap = new HashMap<>();
        try {
        User user=userRepository.findByEmail(request.getEmail());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization","default");

        if(user.getAuthKey().equals(request.getAuthKey())){
            logger.info("인증키 일치!");
            if(user.getRole().equals(Role.TEMPORARY)){
                resultMap.put("first-login","true");
                //temp-> cert
                logger.info("처음으로 로그인된 계정입니다. 관심태그를 입력 받아야 합니다.");
                user.changeRole(Role.CERTIFICATED);
            }
            resultMap.put("message","인증키가 일치합니다.");
            return new BaseMessage(HttpStatus.OK,httpHeaders,resultMap);
        }else{
            resultMap.put("error", "인증키가 일치하지 않습니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
        }catch (Exception e)
        {
            logger.error(e.getMessage());
            resultMap.put("error", "존재하지 않는 계정정보입니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
    }

    @Transactional
    public BaseMessage checkAuthKeyOn(UserDto.LoginRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        try {
        User user=userRepository.findByEmail(request.getEmail());
            HttpHeaders httpHeaders = new HttpHeaders();

        if(user.getAuthKey().equals(request.getAuthKey())){
            logger.info("인증키 일치!");
            resultMap.put("message","인증키가 일치합니다.");

            String email = user.getEmail();
            Long id = user.getId();
            String nickname= user.getNickname();
            resultMap = loginInfo(id,email,nickname);

            String token = "Bearer "+jwtService.create(id,email);
            httpHeaders.add("Authorization",token);
            return new BaseMessage(HttpStatus.OK,httpHeaders,resultMap);

        }else{
            resultMap.put("error", "인증키가 일치하지 않습니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
        }catch (Exception e)
        {
            logger.error(e.getMessage());
            resultMap.put("error", "존재하지 않는 계정정보입니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
    }

    @Transactional
    public BaseMessage autoLogin(UserDto.LoginRequest request,String token)
    {
        Map<String, Object> resultMap = new HashMap<>();
        if(!IsExistUserEmail(request))
        {
            resultMap.put("errors","존재하지 않는 이메일입니다.");
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
        String email = jwtService.getUserEmail(token);
        Long id = jwtService.getUserId(token);
        if(request.getEmail().equals(email))
        {
            resultMap.put("message","인증키가 일치합니다.");
            User user=userRepository.findByEmail(request.getEmail());
            String nickname= user.getNickname();
            resultMap = loginInfo(id,email,nickname);
            return new BaseMessage(HttpStatus.OK,resultMap);
        }
        else
        {
            resultMap.put("error", "토큰에 저장된 내용과 계정의 정보가 일치하지 않습니다.");
            logger.error("request.getUserEmail() "+request.getEmail()+", email "+email);
            return new BaseMessage(HttpStatus.BAD_REQUEST,resultMap);
        }
    }

    private Map loginInfo(Long id, String email,String nickname){
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("id", id);
        resultMap.put("email", email);
        resultMap.put("nickname", nickname);
        return resultMap;
    }

}