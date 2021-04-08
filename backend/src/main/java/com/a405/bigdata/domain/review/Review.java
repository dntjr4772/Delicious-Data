package com.a405.bigdata.domain.review;

import com.a405.bigdata.domain.store.Store;
import com.a405.bigdata.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private int taste;
    private int clean;
    private int service;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String reviewImage;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date regTime;
    @JsonBackReference
    @ManyToOne
    private Store store;

    @ManyToOne
    private User user;
    public void addReviewStore(Store store){
        this.store=store;
        store.getReviews().add(this);
    }

    public void addReviewWriter(User user){
        this.user=user;
        user.getReviews().add(this);
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", taste=" + taste +
                ", clean=" + clean +
                ", service=" + service +
                ", content='" + content + '\'' +
                ", reviewImage='" + reviewImage + '\'' +
                ", regTime=" + regTime +
                '}';
    }
}
