package com.jungthoonParkCompany.webThymeleaf.java;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface MEMBER_TB_REPOSITORY extends JpaRepository<MEMBER_TB, Long> {    //  == @Entity의 datatype  ,   ==@Id의 datatype
//    Page<Board> findByTitleContaining(String searchKeyword, Pageable pageable);
    @Query(value = "SELECT * FROM MEMBER_TB;",nativeQuery = true)
    List<MEMBER_TB> findMEMBER_TB();
    // 이게 보니까 쿼리를 method 에 mapping 을 시켜주는 것과 같다고 보면 된다.
    // 간단한 쿼리는 이게 더 나은지는 모르겠다...
    // 회사서 mybatis 를 계속 보다보니까 jpa 보다 더 적응이 되어서 이제는 mybatis 가 더 나아보인다.
}
