package com.jungthoonParkCompany.webThymeleaf.java;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
public class SKY_PARASITICIDE_TB {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;
    private String PARASITICIDE_NAME;
    private String DATE_TO_FEED;
    private String DATE_DONE;
    private String PROMISED_REFERENCE_DATE;
    private Date DATE_REGEISTED;
    private Timestamp DATETIME_REGEISTED;
    private Timestamp TIMESTAMP_REGEISTED;
}
