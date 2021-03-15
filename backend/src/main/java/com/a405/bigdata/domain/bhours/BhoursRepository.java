package com.a405.bigdata.domain.bhours;

import com.a405.bigdata.domain.menu.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BhoursRepository extends JpaRepository<Menu,Long> {

}
