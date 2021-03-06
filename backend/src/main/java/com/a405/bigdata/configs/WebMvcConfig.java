package com.a405.bigdata.configs;

import io.swagger.models.HttpMethod;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:8080", "http://118.34.136.73:8080", "http://j4a405.p.ssafy.io:3000","http://j4a405.p.ssafy.io:8080","https://j4a405.p.ssafy.io","http://j4a405.p.ssafy.io:5000")
                .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.HEAD.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.DELETE.name()
                )
                .exposedHeaders("Authorization")	//make client read header("jwt-token")
        ;

    }


}
