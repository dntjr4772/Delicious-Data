package com.a405.bigdata.domain.store;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StoreRepository extends PagingAndSortingRepository<Store,Long> {
    // N+1 문제 발생
    List<Store> findByStoreNameContaining(String storeName);
    @Query("select s from Store s left join fetch s.bhours where s.id= :id")
    List<Store> findAllJoinFetch(Long id);

    @Query("select s from Store s left join fetch s.bhours where s.id= :id")
    List<StoreDto.StoreInfoResponse> findAllJoinFetch2(Long id);

    @Query(value = "SELECT *, (6371*acos(cos(radians(:lat))*cos(radians(s.latitude))*cos(radians(s.longitude) -radians(:lng))+sin(radians(:lat))*sin(radians(s.latitude)))) AS distance FROM store s HAVING distance <= 1 ORDER BY distance",
            countQuery = "SELECT count(*) FROM store s WHERE 6371*acos(cos(radians(:lat))*cos(radians(s.latitude))*cos(radians(s.longitude) -radians(:lng))+sin(radians(:lat))*sin(radians(s.latitude))) <= 1",
            nativeQuery = true)
    Page<Store> getNearByRestaurants(@Param("lat") double lat, @Param("lng") double lng, Pageable pageable);

}
