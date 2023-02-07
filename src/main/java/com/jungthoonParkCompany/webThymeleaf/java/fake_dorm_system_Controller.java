package com.jungthoonParkCompany.webThymeleaf.java;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

@Controller
public class fake_dorm_system_Controller extends HttpServlet {
    //__________________________________________________________________________________________________________ FAKE_ITC_DORM
    @GetMapping("/home/main.html")
    public String try_2022_10_18_18_54_23(Model model, HttpServletRequest request) {
        Mgrs.TextMgr.drawLine(Mgrs.CODE.MODE_BRACKET, "ITC_DORM", "83EA");
        Mgrs.TextMgr.drawLine(Mgrs.CODE.MODE_BRACKET, "try_2022_10_18_18_54_23", "83EA");
        return "html/main";
    }

    @PostMapping("/home/main.html")
    public String try_2022_10__18_54_23(Model model, @ModelAttribute loginMgr COMMUNICATION_DATA_STORAGE) {
        System.out.println("____________________________________________@GetMapping(\"/home/main.html\")");
        model.addAttribute("codeValue", new TMP12001000());
        model.addAttribute("data_to_post", COMMUNICATION_DATA_STORAGE);
        return "html/main";
    }

    @GetMapping("/home/login.html")
    public String try_2022_10_18_18_54_33(Model model) {
        System.out.println("____________________________________________@GetMapping(\"/home/login.html\")");
        model.addAttribute("codeValue", new TMP12001000());
        model.addAttribute("data_to_post", new loginMgr());
        return "html/login";
    }

    @PostMapping("/home/login.html")
    public String try_2022_10_18_18_54_22(Model model, @ModelAttribute loginMgr communicationdatastorage) {
        System.out.println("____________________________________________@PostMapping(\"/home/login.html\")");
        model.addAttribute("codeValue", new TMP12001000());
        model.addAttribute("data_to_post", communicationdatastorage);
        return "html/loginProc";
    }

    @GetMapping("/home/loginProc.html")
    public String try_2022__18_18_5_22(Model model) {
        System.out.println("____________________________________________@GetMapping(\"/home/loginProc.html\")");
        model.addAttribute("codeValue", new TMP12001000());
        model.addAttribute("data_to_post", new loginMgr());
        return "html/loginProc";
    }

    @PostMapping("/home/loginProc.html")
    public String try_2022_10_18_18_5_22(Model model, @ModelAttribute loginMgr communication_data_storage) {
        model.addAttribute("codeValue", new TMP12001000());
        model.addAttribute("data_to_post", communication_data_storage);
        return "html/main";
    }

    @GetMapping("/home/my-page.html")
    public String try_2022_10_18_18_54_24(Model model) {
        TMP12001000 TMPCodeValue = new TMP12001000();
        model.addAttribute("codeValue", TMPCodeValue);
        return "html/my_page";
    }

    @GetMapping("/home/community.html")
    public String try_2022_10_18_18_54_25(Model model) {
        TMP12001000 TMPCodeValue = new TMP12001000();
        model.addAttribute("codeValue", TMPCodeValue);
        return "html/community";
    }

}