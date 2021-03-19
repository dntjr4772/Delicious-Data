package com.a405.bigdata.domain.menu;

import lombok.Builder;
import lombok.Data;

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
}
