package com.a405.bigdata.domain.user;

import com.a405.bigdata.domain.review.Review;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String nickname;
    private char gender;
    private int bornYear;
    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<Review> reviews=new ArrayList<>();

    //인증
    @Builder.Default
    private String authKey ="";
    //임시 고객
    @Builder.Default
    @Enumerated(EnumType.STRING)
    private Role role = Role.TEMPORARY;

    public void changeAuthKey(String authKey){
        this.authKey =authKey;
    }

    public void changeRole(Role role){
        this.role=role;
    }
}
