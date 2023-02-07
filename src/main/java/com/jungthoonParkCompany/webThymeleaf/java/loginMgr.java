package com.jungthoonParkCompany.webThymeleaf.java;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class loginMgr {
    private String STD_NO;
    private String PWD;
    private String LOGIN_PERMISSION_YN;
}
