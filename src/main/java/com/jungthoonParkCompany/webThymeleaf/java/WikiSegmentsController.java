package com.jungthoonParkCompany.webThymeleaf.java;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class WikiSegmentsController {
    @Autowired
    private SKY_PARASITICIDE_TB_REPOSITORY sky_parasiticide_tb_repository;
    @GetMapping("/wiki/wiki_segments.html")
    public String try_2022_10_18_02_26_58(Model model) {
//        List<SKY_PARASITICIDE_TB> SKY_PARASITICIDE_TB =sky_parasiticide_tb_repository.findAll();
//        out.println(SKY_PARASITICIDE_TB);// 너무길다...가로로 데이터를 출력되도록 하자.
        model.addAttribute("codeValue", new TMP12001000());
//        model.addAttribute("SKY_PARASITICIDE_TB", SKY_PARASITICIDE_TB);
        return "/html/wiki_segments";
    }
//    @PostMapping("/html/wiki_segments.html")
//    public String try_2022_10_18_02_26_51(@ModelAttribute RowsSkyParasiticide rowsSkyParasiticide) {
//        if(rowsSkyParasiticide.getId()==null){
//            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
//        }else if(rowsSkyParasiticideRepository.findById(rowsSkyParasiticide.getId())==null) {
//            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
//        }else{
//            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
//        }
//        return "redirect:/html/wiki_segments_";
//    }
//    @PostMapping("/html/wiki_segments_.html")
//    public String try_2022_10_24_16_54_43(@ModelAttribute RowsSkyParasiticide rowsSkyParasiticide) {
//        rowsSkyParasiticideRepository.deleteById(rowsSkyParasiticide.getId());
//        return "redirect:/html/wiki_segments_";
//    }
}