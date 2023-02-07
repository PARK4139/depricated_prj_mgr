package com.jungthoonParkCompany.webThymeleaf.java;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
@Data
public class MEMBER_TB {
    @Id   // ==Primary Key==  \\    BOARD_TB.java의 idx와  maria db.TB idx 가 PK로서 ORM을 구현하도록
    @GeneratedValue(strategy = GenerationType.IDENTITY)   //== IDENTITY 사용간편  SEQUENCE 로 하면 고성능이나 관리가 필요하다고 한다.
    private long SEQ;
    private String MEMBER_ID;
    private String MEMBER_PASSWORD;
    private String MEMBER_NAME;
    private String MEMBER_TYPE;
    private String REGISTER_NAME;
    private String DATE_REG;
}
