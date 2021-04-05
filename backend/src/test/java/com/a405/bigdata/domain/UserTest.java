package com.a405.bigdata.domain;


import com.a405.bigdata.common.BaseDomainTest;
import com.a405.bigdata.domain.user.User;
import com.a405.bigdata.domain.user.UserRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class UserTest extends BaseDomainTest {
    @Autowired
    UserRepository accountRepository;

    @Test
    public void 유저_생성()
    {
        //Given
        char gender = '남';
        int bornYear=1995;
        String email="dntjr4772@nate.com";
        String nickname="dd우석";

        User user = User.builder()
                .gender(gender)
                .bornYear(bornYear)
                .email(email)
                .nickname(nickname)
                .build();

        accountRepository.save(user);

    }
}
