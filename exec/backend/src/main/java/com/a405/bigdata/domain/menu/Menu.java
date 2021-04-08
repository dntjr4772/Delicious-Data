package com.a405.bigdata.domain.menu;

import com.a405.bigdata.domain.store.Store;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

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
    @JsonBackReference
    @ManyToOne
    private Store store;

    @Override
    public String toString() {
        return "Menu{" +
                "id=" + id +
                ", menuName='" + menuName + '\'' +
                ", price=" + price +
                '}';
    }
}
