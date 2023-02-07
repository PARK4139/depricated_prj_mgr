package com.jungthoonParkCompany.webThymeleaf.java;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity    // ==object== \\  BOARD_TB.java 와 maria db.TB 가 통신하도록 ORM 구현하는 데 필요한 요소
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BOARD_TB {
    @Id   //  ==Primary Key==  \\    BOARD_TB.java의 idx와  maria db.TB idx 가 PK로서 ORM을 구현하도록
    @GeneratedValue(strategy = GenerationType.IDENTITY)   //BOARD_TB.java의 idx와  maria db.TB idx 가 auto increasing value 로서 ORM을 구현하도록
    private long idx;
    private String title;
    private String content;
    private String writer;
    private String regdate;
    private int viewcnt;
}
