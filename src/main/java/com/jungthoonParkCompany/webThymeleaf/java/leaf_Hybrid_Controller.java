package com.jungthoonParkCompany.webThymeleaf.java;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import static com.jungthoonParkCompany.webThymeleaf.java.Mgrs.TextMgr.nbsp;

@Controller
public class leaf_Hybrid_Controller extends HttpServlet {
    @Controller
    public class leafController extends HttpServlet {
//        @Autowired
//        MEMBER_TB_REPOSITORY MEMBER_TB_REPOSITORY;
//        @Autowired
//        BOARD_TB_REPOSITORY BOARD_TB_REPOSITORY;

        //__________________________________________________________________________________________________________ leaf
        @GetMapping("/leaf/leaf.html")
        public String test_2022_12_07_21_18(Locale locale, Model model, HttpServletRequest request) {
            Mgrs.TextMgr.drawLine(Mgrs.CODE.MODE_BRACKET, "TROUBLESHOOTING_ID : 2022 12 07 22 32", "83");

            //DB 에서 가져온 값을 변수에 저장
//            List<MEMBER_TB> tmp1501001 = MEMBER_TB_REPOSITORY.findAll();
//            List<BOARD_TB> tmp1501002 = BOARD_TB_REPOSITORY.findAll();

            //java class 에서 가져온 값을 변수에 저장
            leafMgr tmp1501003 = new leafMgr();
            TMP12001000 tmp1501004 = new TMP12001000();


//            model.addAttribute("MEMBER_TB", tmp1501001);
//            model.addAttribute("BOARD_TB", tmp1501002);
            model.addAttribute("leafMgr", tmp1501003);
            model.addAttribute("CODEVALUE", tmp1501004);


            SimpleDateFormat yyyy_MM_dd_HH_mm_ss = new SimpleDateFormat("yyyy MM dd HH mm ss");
            SimpleDateFormat yyyy_MM_dd_HH_mm = new SimpleDateFormat("yyyy MM dd HH mm");
            SimpleDateFormat yyyy_MM_dd_HH = new SimpleDateFormat("yyyy MM dd HH");
            SimpleDateFormat yyyy_MM_dd = new SimpleDateFormat("yyyy MM dd");
            SimpleDateFormat yyyy_MM = new SimpleDateFormat("yyyy MM");
            SimpleDateFormat yyyy = new SimpleDateFormat("yyyy");
            SimpleDateFormat HH_mm_ss = new SimpleDateFormat("HH mm ss");
            SimpleDateFormat HH_mm = new SimpleDateFormat("HH mm");
            SimpleDateFormat HH = new SimpleDateFormat("HH");
            SimpleDateFormat MM = new SimpleDateFormat("MM");
            SimpleDateFormat dd = new SimpleDateFormat("dd");
            SimpleDateFormat mm = new SimpleDateFormat("mm");
            SimpleDateFormat ss = new SimpleDateFormat("ss");
            SimpleDateFormat format2 = new SimpleDateFormat("yyyy년 MM월 dd일");
            SimpleDateFormat format6 = new SimpleDateFormat("HH시 mm분 ss초");
            Date date = new Date();
            String sysdate11 = yyyy_MM_dd_HH_mm_ss.format(date);
            String sysdate22 = HH_mm_ss.format(date);
            String sysdate33 = HH_mm.format(date);


            StringBuffer tmp = new StringBuffer();
            tmp.append("locale" + "\t" + locale + "\n");
            tmp.append("sysdate11" + "\t" + sysdate11 + "\n");
            tmp.append("sysdate22" + "\t" + sysdate22 + "\n");
            tmp.append("sysdate33" + "\t" + sysdate33 + "\n");
            tmp.append("tmp1501004.getClass().getSimpleName()" + "\t" + tmp1501004.getClass().getSimpleName() + "\n");
            tmp.append("tmp1501004.getName_kor()" + "\t" + tmp1501004.getName_kor() + "\n");
            tmp.append("tmp1501004.getHomeAddress_kor()" + "\t" + tmp1501004.getHomeAddress_kor() + "\n");
            tmp.append("tmp1501004.getName_eng()" + "\t" + tmp1501004.getName_eng() + "\n");
            tmp.append("tmp1501004.getId()" + "\t" + tmp1501004.getId() + "\n");
            tmp.append("tmp1501004.getHomeAddress_eng()" + "\t" + tmp1501004.getHomeAddress_eng() + "\n");
//            tmp.append("MEMBER_TB.toString()" + "\t" + tmp1501001.toString() + "\n");
//            tmp.append("BOARD_TB.get(0).toString()" + "\t" + tmp1501002.get(0).toString() + "\n");
            Mgrs.TextMgr.reassembleContentsAsTableAndPrint(tmp.toString(), "\n", "\t");


//        "table 에 입력할 값 준비 하도록"
//        int port = request.getLocalPort();
//        String serverUrl = request.getServletPath();
//        String serverName = request.getServerName();
            //request.getParameterValues(username)                                       //이름이 중복된 복수 parameter의 조회 되도록
//        String sFileName = Path.GetFileName(request.PhysicalPath);                 // file명을 가져오도록 (방법1)
//        String[] file = Request.CurrentExecutionFilePath.Split('/');               // file명을 가져오도록 (방법2 1/2)
//        String fileName = file[file.Length-1];                                     // file명을 가져오도록 (방법2 2/2)


//        "table 출력 후 table close() 하도록"
//        TablePattern PAGE_TB = new TablePattern.Builder("PAGE_TB")
//                .SET_MODE(CODE.CASE_DEFAULT, CODE.CASE_DEFAULT, CODE.DIVIDER_DEFAULT)
//                .row(new String[]{
//                        /*_*/"logged Time With Date",
//                        /*_*/"logged Date",
//                        /*_*/"logged Time",
//                        /*1*/"server Name",
//                        /*2*/"port",
//                        /*3*/"server Url"
////                      /*_*/_________,
//                })
//                .row(new String[]{
//                        /*_*/loggedTimeWithDate,
//                        /*_*/loggedDate,
//                        /*_*/loggedTime,
//                        /*1*/serverName,
//                        /*2*/Integer.toString(port),
//                        /*3*/serverUrl,
//                      /*_*/"        "
//                      /*_*/_________,
//                })
//                .build();
//        PAGE_TB.printTblInfoSummary();
//        PAGE_TB.close();
            Mgrs.TextMgr.drawLine(Mgrs.CODE.MODE_BRACKET, "____________________________________________________ CLASS", "83EA");
            // ______________________________________________________
            //     TestClass testClass = new TestClass();
            //
            //    System.out.println("getName()      : " + testClass.getClass().getName());
            //    System.out.println("getSimpleName()  : " + testClass.getClass().getSimpleName());
            //    System.out.println("===========getMethods()===========");
            //    for(Method method : testClass.getClass().getMethods()){
            //        System.out.println("method          : " + method.getName());
            //    }
            //    System.out.println("===========getFields()===========");
            //    for(Field field : testClass.getClass().getFields()){
            //        System.out.println("field           : " + field.getName());
            //    }
            return "html/leaf";
        }

        @PostMapping("/leaf/leaf.html")
        public String test_2022_12_07_21_19(@ModelAttribute leafMgr leafMgr, Model model) {
            Mgrs.TextMgr.drawLine(Mgrs.CODE.MODE_BRACKET, "test_2022_12_02", "83EA");
//            model.addAttribute("leafMgr", leafMgr);
//            model.addAttribute("data_to_post", new loginMgr());
            return "test/display";
        }
    }

    @RestController
    public class AppRestController {

        @GetMapping("/leaf/leaf_sound.html")
        public String test_2022_12_07_21_31(@ModelAttribute leafMgr leafMgr, Model model) {
            String tmp_file = "\"E:\\500GB\\do\\utils\\scheduleMgr\\PotPlayerMini64 [점심시간중 플레이리스트].dpl\"";
            Mgrs.win10PcMgr.run("explorer"+nbsp+tmp_file);
            return "";
        }
        @GetMapping("/leaf/leaf_video.html")
        public String test_2022_12_25_16_31() {
            String tmp_file = "\"E:\\500GB\\do\\utils\\scheduleMgr\\PotPlayerMini64 [점심시간중 플레이리스트].dpl\"";
            Mgrs.win10PcMgr.run("explorer"+nbsp+tmp_file);
            return "";
        }

//    @PostMapping("/home/loginProcok.html")
//    public String try_2022_10_18_18_54_22(Model model, @ModelAttribute Data_to_post Data_to_post, MEMBER_TB MEMBER_TB) {
//        out.println("____________________________________________@PostMapping(\"/home/loginProcok.html\")");
//        List<MEMBER_TB> member_tbs=member_tb_repository.findMEMBER_TB();
//        out.println(member_tbs.toString());
//        int my_choice=1;
//        if(my_choice==1){
//            StringBuffer html=new StringBuffer();
//            html.append("<!DOCTYPE HTML>");
//            html.append("<html>");
//            html.append("<head>");
//            html.append("<meta charset='utf-8'>");
//            html.append("<meta lang='ko'>");
//            html.append("<meta http-equiv='Content-Type' />");
//            html.append("<meta content='text/html; />");
//            html.append("<meta name='viewport' content='width=device-width, initial-scale=1'>");
//            html.append("<meta name='description' content=''>");
//            html.append("<meta name='author' content=''>");
//            html.append("<meta name='generator' content='Hugo 0.104.2'>");
//            html.append("<title>test</title>");
//            html.append("</head>");
//            html.append("<body>");
//            html.append("<form name=fm>");
//            html.append("<input type=hidden name=LoginSuccessYN value='y'>");
//            html.append("</form>");
//            html.append("<script type=text/javascript>");
//            html.append("document.fm.method='post';");
//            html.append("document.fm.action='/home/main.html';");
//            html.append("document.fm.submit();");
//            html.append("</script>");
//            html.append("</body>");
//            html.append("</html>");
//            return html.toString();
//        }else if(my_choice==2){
//            StringBuffer html=new StringBuffer();
//            html.append("<form name=loginResult>");
//            html.append("window.location.href = '/home/main.html';");
//            return html.toString();
//        };
//        return "@PostMapping(\"/home/loginProcok.html\") exception";
//    }

    }
}
