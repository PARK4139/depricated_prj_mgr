package com.jungthoonParkCompany.webThymeleaf.java;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;

@RestController
public class RPA_Controller extends HttpServlet {
    @GetMapping("/RPA.html")
    public String accessServelet202212072359() {
        StringBuffer tmp = new StringBuffer();
        tmp.append("  <script>");
        tmp.append("        var uid='withvision';");
        tmp.append("        var pwd='6952!itc';");
        tmp.append("        ");
        tmp.append("        var form_fm = document.createElement('form');");
        tmp.append("        form_fm.setAttribute('name', 'fm');");
        tmp.append("        form_fm.setAttribute('charset', 'UTF-8');");
        tmp.append("        form_fm.setAttribute('method', 'Post');");
        tmp.append("        form_fm.setAttribute('action', '/RPA.html');");
        tmp.append("");
        tmp.append("        var uid_input = document.createElement('input');");
        tmp.append("        uid_input.setAttribute('type', 'hidden');");
        tmp.append("        uid_input.setAttribute('name', 'uid');");
        tmp.append("        uid_input.setAttribute('value', uid);");
        tmp.append("        form_fm.appendChild(uid_input);");
        tmp.append("");
        tmp.append("        var pwd_input = document.createElement('input');");
        tmp.append("        pwd_input.setAttribute('type', 'hidden');");
        tmp.append("        pwd_input.setAttribute('name', 'pwd');");
        tmp.append("        pwd_input.setAttribute('value', pwd);");
        tmp.append("        form_fm.appendChild(pwd_input);");
        tmp.append("");
        tmp.append("        document.body.appendChild(form_fm);");
        tmp.append("        form_fm.submit();");
        tmp.append("        //document.form_fm.submit();");
        tmp.append("    </script>");
        return tmp.toString();
    }
}
