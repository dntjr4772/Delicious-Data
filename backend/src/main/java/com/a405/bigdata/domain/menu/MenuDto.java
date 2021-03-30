package com.a405.bigdata.domain.menu;

import com.a405.bigdata.domain.store.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.ManyToOne;

public class MenuDto {
    @Data
    @Builder
    //메뉴 생성 요청
    public static class CreateAccountRequest
    {
        private String menuName;
        private int price;
        public Menu toEntity()
        {
            return Menu.builder()
                    .menuName(this.menuName)
                    .price(this.price)
                    .build();
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ResponseMenu{
        private String menuName;
        private int price;
    }
}
