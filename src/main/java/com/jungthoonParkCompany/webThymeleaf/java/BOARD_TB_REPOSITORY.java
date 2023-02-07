package com.jungthoonParkCompany.webThymeleaf.java;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RestController;

//  BoardEntity(== Entity의 datatype ) ,  Long( ==Id의 datatype)
// spring boot data JPA를 사용하여 paging을 위한 준비,
// List<BoardEntity>로 받지 말고 Page<BoardEntity>로 받을것.

public interface BOARD_TB_REPOSITORY extends JpaRepository<BOARD_TB, Long> {    //  == @Entity의 datatype  ,   ==@Id의 datatype
//    Page<Board> findByTitleContaining(String searchKeyword, Pageable pageable);

    // 일반 SQL쿼리
//    @Query(value = "select snack_id, name, price from BOARD_TB", nativeQuery = true)
//    public List<BOARD_TB> selectAllSQL();

    // SQL은 테이블의 컬럼명이 snack_id이기 때문에 조건절에 snack_id
    // SQL 일반 파라미터 쿼리, @Param 사용 X
//    @Query(value = "select snack_id, name, price from snack where snack_id > ?1", nativeQuery = true)
//    public List<Snack> selectSQLById1(int id);
//
//    // SQL 일반 파라미터 쿼리, @Param 사용 O
//    @Query(value = "select snack_id, name, price from snack where snack_id > :id", nativeQuery = true)
//    public List<Snack> selectSQLById2(@Param(value = "id") int id);
//
//    // SQL 객체 파라미터 쿼리
//    @Query(value = "select snack_id, name, price from snack where snack_id > :#{#paramSnack.id}", nativeQuery = true)
//    public List<Snack> selectSQLById3(@Param(value = "paramSnack") Snack snack);
}
