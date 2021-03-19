package com.a405.bigdata.domain.review;

import com.a405.bigdata.domain.menu.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review,Long> {

}
