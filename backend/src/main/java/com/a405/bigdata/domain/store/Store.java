package com.a405.bigdata.domain.store;

import com.a405.bigdata.domain.bhours.Bhours;
import com.a405.bigdata.domain.menu.Menu;
import com.a405.bigdata.domain.review.Review;
import com.a405.bigdata.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")
//@JsonIdentityReference(alwaysAsId = true)
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String storeName;
    private String branch;
    private String area;
    private String tel;
    private String address;
    private double latitude;
    private double longitude;
    @Column(columnDefinition = "TEXT")
    private String image;
    private String category;
    //@JsonManagedReference
    @OneToMany(mappedBy = "store")
    private List<Bhours> bhours;
    private Double tasteAvg;
    private Double cleanAvg;
    private Double serviceAvg;
    private int reviewCnt;
    //@JsonManagedReference
    @Builder.Default
    @OneToMany(mappedBy = "store")
    private List<Menu> menus=new ArrayList<>();

    //@JsonManagedReference
    @Builder.Default
    @OneToMany(mappedBy = "store")
    private List<Review> reviews=new ArrayList<>();

    public void UpdateReview(Double tasteAvg, Double cleanAvg, Double serviceAvg){
        this.tasteAvg=tasteAvg;
        this.cleanAvg=cleanAvg;
        this.serviceAvg=serviceAvg;
        this.reviewCnt++;
    }

    @Override
    public String toString() {
        return "Store{" +
                "id=" + id +
                ", storeName='" + storeName + '\'' +
                ", branch='" + branch + '\'' +
                ", area='" + area + '\'' +
                ", tel='" + tel + '\'' +
                ", address='" + address + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", image='" + image + '\'' +
                ", category='" + category + '\'' +
                ", bhours=" + bhours +
                ", tasteAvg=" + tasteAvg +
                ", cleanAvg=" + cleanAvg +
                ", serviceAvg=" + serviceAvg +
                ", reviewCnt=" + reviewCnt +
                ", menus=" + menus +
                ", reviews=" + reviews +
                '}';
    }
}
