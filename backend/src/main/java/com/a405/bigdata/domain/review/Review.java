package com.a405.bigdata.domain.review;

import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int score;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String reviewImage;
    @Temporal(TemporalType.TIMESTAMP)
    private Date regTime;
    @ManyToOne
    private Store store;
    @ManyToOne
    private User user;
}
