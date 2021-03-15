package com.a405.bigdata.domain.user;

import com.a405.bigdata.domain.review.Review;
import lombok.*;

import javax.persistence.*;

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
    @OneToOne(mappedBy = "user")
    Review review;
}
