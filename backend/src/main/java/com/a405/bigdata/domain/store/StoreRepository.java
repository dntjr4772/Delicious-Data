package com.a405.bigdata.domain.store;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StoreRepository extends JpaRepository<Store,Long> {
    // N+1 문제 발생
    List<Store> findByStoreNameContaining(String storeName);
    @Query("select s from Store s join fetch s.bhours where s.id= :id")
    List<Store> findAllJoinFetch(Long id);

}
