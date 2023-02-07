package com.jungthoonParkCompany.webThymeleaf;

import com.jungthoonParkCompany.webThymeleaf.java.Mgrs;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MY_MGR_TERRITORY extends Mgrs {
    public static void main(String[] args) {
        SenarioMgr.play("TestMgr");
//        SenarioMgr.play("itcDormMgr");
//        SenarioMgr.play("itcDormMgr",args);
//        SenarioMgr.play("WEB_SERVER",args);
        SenarioMgr.play("리프야", args);
//        SenarioMgr.play("wiki_segments",args);
        SenarioMgr.play("ScheduleMgr");
    }
}
