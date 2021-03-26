package com.a405.bigdata.domain.store;

import com.a405.bigdata.domain.bhours.Bhours;
import com.a405.bigdata.domain.menu.Menu;
import com.a405.bigdata.domain.review.Review;
import com.a405.bigdata.domain.user.User;
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
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String storeName;
    private String branch;
    private String area;
    private String tel;
    private String address;
//    private double latitude;
//    private double longitude;
    private Long latitude;
    private Long longitude;
    private String image;
    private String category;
    @OneToOne(mappedBy = "store")
    private Bhours bhours;

    @Builder.Default
    @OneToMany(mappedBy = "store")
    private List<Menu> menus=new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "store")
    private List<Review> reviews=new ArrayList<>();
}
