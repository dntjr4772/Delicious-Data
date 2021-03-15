package com.a405.bigdata.domain.menu;

import com.a405.bigdata.domain.store.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //store 다대일
    private String menuName;
    private int price;
    @ManyToOne
    private Store store;

}
