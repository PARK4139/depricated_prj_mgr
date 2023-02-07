//fake AI project


var audio = new Audio();
var AudioContext;
var audioContext;
var yyyy;
var dd;
var MM;
var HH;
var mm;
var ss;
var yyyy_MM_dd_HH_mm_ss;
var HH2;
var mm2;
var timestamp;
var dayOfTheWeek;
var mgr_js1;
mgr_js1= new mgr_js();
var mgr_js1PlayStatus = "ended";
//___________________________________________________________________________________________________ leaf
function leaf(){
    this.data1;
    this.data2;
    this.data3;
}
//leaf.prototype.speak = function(mp3Address, WAY) {
//    if(WAY=="WAY1"){
//        var audio = new Audio(mp3Address);
//        audio.currentTime = 0; //0 안될수도 있음.
//        audio.volume = 0 // autoplay 를 위한 시도
//        audio.load();// audio의 src나 설정이 바뀌었을 경우에 사용
//        audio.play();
//    }
//    if(WAY=="WAY2"){
//        //무한루프 재생
//         var audio = new Audio(mp3Address);
//        audio.src = mp3Address;
//        audio.loop = true;
//        audio.currentTime = 1;
//        audio.volume = 0.2 // 0.0~1.0
//        audio.load();// audio의 src나 설정이 바뀌었을 경우에 사용
//        audio.play();
//    }
//    if(WAY=="WAY3"){
//        var mp3Address =mp3Address;
//        var audio = new Audio(mp3Address);
//        audio.src = mp3Address;
//        audio.loop = false;
//        audio.currentTime = 0; //0 안될수도 있음.
//        audio.volume = 0.2 // 0.0~1.0
//        audio.load();// audio의 src나 설정이 바뀌었을 경우에 사용
//        if(audio.readyState){
//        <!--    audio.autoplay = true; // audio load 시 자동 재생//크롬 브라우저에서는 autoplay가 금지되어 자동재생이 불가-->
//        audio.play();
//        }
//    }
//}
//___________________________________________________________________________________________________ mgr_js
function mgr_js(){
    this.data1;
    this.data2;
    this.data3;
}
// 텍스트를 텍스트파일로 저장
mgr_js.prototype.saveTextAsTextFile = function(fileName, content) {
var blob = new Blob([content], { type: 'text/plain' });
objURL = window.URL.createObjectURL(blob);
// 이전에 생성된 메모리 해제
if (window.__Xr_objURL_forCreatingFile__) {
	window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
	window.__Xr_objURL_forCreatingFile__ = objURL;
	var a = document.createElement('a');
	a.download = fileName;
	a.href = objURL;
	a.click();
}
mgr_js.prototype.alertData = function (certainData){
    alert(typeof certainData);
}
mgr_js.prototype.play = function (mp3Address,WAY){
    if(WAY=="WAY1"){
        audio.src=mp3Address;
        audio.currentTime = 0; //0 안될수도 있음.
        audio.volume = 1.0// 0.0~1.0-->
        audio.load();// audio의 src나 설정이 바뀌었을 경우에 사용
        audio.autoplay = false;
        audio.play();
    }
}
mgr_js.prototype.pause = function (){
        audio.pause();
}
mgr_js.prototype.openAndClose = function (){
    var popUrl = "https://www.naver.com/";
    var name = "_blank";
    var popOption = "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
	var delayInMilliseconds = 4000;
	setTimeout(function() {
	    //window.open('','_self').close();
        //window.open(popUrl,'_self').close();
        //window.open(popUrl).close();
	    window.open(popUrl,name, popOption).close();  // _self 가 없어서 그런가. 안닫힘...
	}, delayInMilliseconds);
}
mgr_js.prototype.submitForm = function (){
	//document.fm.method="post"
	//document.fm.action = "http://localhost:9090/leafPlaySystemCallSound.html";
	document.fm.target = "_blank";
	document.fm.submit();
}
mgr_js.prototype.reloadLeaf = function() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    }).catch(e => {
        console.error(`Audio permissions denied: ${e}`);
    });
}
mgr_js.prototype.chkAudioElementReady = function() {
    alert("audio.readyState = "+audio.readyState);
}
mgr_js.prototype.genInputTagAndConnectToParentTagWAY1 = function(childTagType,childTagName,childTagId,childTagValue,childTagOnclickFunctionName,parentIdToConnect) {
        // create child
        var child = document.createElement('input');
        child.setAttribute("type", childTagType);//type="hidden"
        child.setAttribute("name", childTagName);
        child.setAttribute("id", childTagId);
        child.setAttribute("value", childTagValue);
        child.setAttribute("onclick", childTagOnclickFunctionName);
        // select parent
        var parent=document.getElementById(parentIdToConnect);
        // connect child to parent
        parent.appendChild(child);
}
mgr_js.prototype.genInputTagAndConnectToParentTagWAY2 = function(childTagType,childTagName,onclickFunctionName,parentIdToConnect) {
        // create child
        var child = document.createElement('input');
        child.setAttribute("type", childTagType);
        child.setAttribute("name", childTagName);
        child.setAttribute("id", onclickFunctionName);
        child.setAttribute("value", onclickFunctionName);
        child.setAttribute("onclick", onclickFunctionName);
        // select parent
        var parent=document.getElementById(parentIdToConnect);
        // connect child to parent
        parent.appendChild(child);
}
mgr_js.prototype.makeChildElementAndConnectToParentTag = function(tagName,parentIdToConnect) {
        // create child
        var child = document.createElement(tagName);
        // select parent
        var parent=document.getElementById(parentIdToConnect);
        // connect child to parent
        parent.appendChild(child);
}
//___________________________________________________________________________________________________
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.play('/mp3/foo.mp3','WAY1')","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.play('/mp3/네.mp3','WAY1')","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.reloadLeaf()","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.openAndClose()","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.chkAudioElementReady()","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.play('/mp3/양식 제출을.mp3','WAY1')","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","mgr_js.prototype.play('/mp3/시도합니다.mp3','WAY1')","id1");
//mgr_js.prototype.makeChildElementAndConnectToParentTag("br","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","____________________","id1");
//mgr_js.prototype.genInputTagAndConnectToParentTagWAY2("button","","____________________","id1");
//___________________________________________________________________________________________________  clockMgr
function alignTime() {
	function to2Digits(time) {
		if (parseInt(time) < 10) {
			return "0" + time;
		}
		else
			return time;
	}
	var date = new Date();
	yyyy = date.getFullYear();
	MM = to2Digits(date.getMonth() + 1);
	dd = to2Digits(date.getDate());
	HH = to2Digits(date.getHours());
	mm = to2Digits(date.getMinutes());
	ss = to2Digits(date.getSeconds());
	HH2 = date.getHours();
	mm2 = date.getMinutes();
	yyyy_MM_dd_HH_mm_ss = `_${yyyy}_${MM}_${dd}_${HH}_${mm}_${ss}`;
	var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
	dayOfTheWeek = week[date.getDay()];
//	$(".mkr_KST").text(`${MM}`);
//	$(".mkr_KST").text(`${yyyy}`);
//	$(".mkr_KST").text(`${dayOfTheWeek}`);
//	$(".mkr_KST").text(`${timestamp}`);
//	$(".mkr_KST").text(`${yyyy} ${MM} ${dd} ${HH} ${mm} ${ss} `);
    document.getElementsByClassName("clock").textContent  = `${yyyy} ${MM} ${dd} ${HH} ${mm} ${ss} ${dayOfTheWeek}`;
    document.getElementsByClassName("clock").value  = `${yyyy} ${MM} ${dd} ${HH} ${mm} ${ss} ${dayOfTheWeek}`;
    document.getElementById("clock").textContent  = `${yyyy} ${MM} ${dd} ${HH} ${mm} ${ss} ${dayOfTheWeek}`;
}
//___________________________________________________________________________________________________ senarioMgr
function eventMonitoring(){
//    audio.addEventListener("ended", function(){
//    document.addEventListener("ended", function(){
//        window.location.replace("http://localhost:9090/leaf/leaf.html");//way3 for redirect
//    });
    //document.addEventListener("mousemove", "alert("mouse moved");");
    //document.addEventListener("mousehover", "alert("mouse moved");");

    //console.log("event.target : "+event.target);
    //console.log("event.currentTarget : "+event.currentTarget);
    //console.log("event.type : "+event.type);
    //console.log("document.readyState : "+document.readyState);;
    //document.getElementsByTagName("*").addEventListener("ended", function(){
    //alert("audio.playing"+audio.playing);
    //alert("document.audio.ended"+document.audio.ended);
    //alert("event.currentTarget === document.body"+event.currentTarget === document.body); //true
    //alert("this === document.body"+this === document.body); //true
    //alert("event.target"+event.target);//true
    //alert("event.trusted"+event.trusted);
    //}
    //setTimeout(() => {mgr_js1.play("/mp3/코드 테스트 결과.mp3","WAY1");}, 0);
    //setTimeout(() => {mgr_js1.play("/mp3/이벤트를.mp3","WAY1");}, 1500);
    //setTimeout(() => {mgr_js1.play("/mp3/감지하였습니다.mp3","WAY1");}, 2500);
    //document.addEventListener('click', function(event){
    //alert('Hello world, '+event.target.value);
    //});
}
function getAudioPermission(){
//audio permission way2 s
    navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    }).catch(e => {
        console.error(`Audio permissions denied: ${e}`);
    });
//audio permission way2 e
}

//___________________________________________________________________________________________________
var popUrl = "http://localhost:9090/leaf/leaf.html";
//var popOption = "_blank, top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
var Option = "_blank, top=10, left=10, status=no, menubar=no, toolbar=no, resizable=no";
var delayInMilliseconds = 2000;
//var delayInMilliseconds = 1500;
window.onload = function() {
    setInterval("getAudioPermission();", 5000);
    setInterval("eventMonitoring();", 1000);
    setInterval("alignTime();", 1000);
    setInterval(function (){
        for(a in audio){
            console.log(a+" : "+audio[a]);
        }
    }, 500);

//    audio.addEventListener("ended", function(){
////        alert(event.type);
////        alert(event.currentTarget);
////        alert(event.target);
////        window.location.reload();
//    }, true);

//    audio.addEventListener("ended", function(){
////        setTimeout("window.location.reload();", 15000);
//        window.location.reload();
//    }, false);
//    setInterval(function (){
//        if(audio.ended==true){
//          window.open(popUrl,Option);
//          setTimeout(function() {
//              window.close();
//          }, 11000);
//        }
//    },1000);
//    setInterval(function (){
//        if(audio.ended==false){
//            window.open(popUrl,Option);
//            setInterval(function (){
//                        window.close();
//                },11000);
//        }
//    },10000);
//    setTimeout("window.location.reload();", 60000);
    setTimeout("window.close();", 600000);
}


//___________________________________________________________________________________________________ STT via p5.js
let recSpeak;
let kofont;
var voiceCommand;
let lang = 'ko';
//y=100;
//y=50;//toturailize
//y=20;//toturailize
y=15;//way_mystyle2
//y=10;//way_mystyle1
//y=5;//way_mystyle1
var count = 0;
var playingSoundFileDuration = 0;
function setup() {
  recSpeak = new p5.SpeechRec(lang, results);
  recSpeak.start(true, false);
}
function results(){
    if(recSpeak.resultValue){
        if(count == 0){
            setTimeout(() => {mgr_js1.play("/mp3/시스템을.MP3","WAY1")}, 0);
            setTimeout(() => {mgr_js1.play("/mp3/시작했습니다.MP3","WAY1")}, 1000);
            count++;
        }
        voiceCommand = recSpeak.resultString;
        document.getElementsByClassName("VoiceCommandInputBox")[0].value=voiceCommand;
        if(voiceCommand.trim()=="리프"||voiceCommand.trim()=="리플"||voiceCommand.trim()=="리프야"||voiceCommand.trim()=="디프야"||voiceCommand.trim()=="디프 야"||voiceCommand.trim()=="리프 야"||voiceCommand.trim()=="리피아"||voiceCommand.trim()=="히틀러"||voiceCommand.trim()=="베프야"||voiceCommand.trim()=="빅풋"||voiceCommand.trim()=="데크"||voiceCommand.trim()=="비트"||voiceCommand.trim()=="f"||voiceCommand.trim()=="히프"){
                 mgr_js1.play('/mp3/네.mp3','WAY1');
        }
        if(voiceCommand.trim()=="누구야"||voiceCommand.trim()=="너 누구야"){
                 setTimeout(() => {mgr_js1.play('/mp3/안녕하세요 저는 리프입니다.mp3','WAY1');}, 0);
        }
        if(voiceCommand.trim()=="도와줘"){
             mgr_js1.play("/mp3/무엇을 도와드릴까요.mp3","WAY1");
        }
        if(voiceCommand.trim()=="제출"||voiceCommand.trim()=="대출"||voiceCommand.trim()=="양식 제출"){
            setTimeout(() => {mgr_js1.play("/mp3/양식 제출을.MP3","WAY1")}, 0);
            setTimeout(() => {mgr_js1.play("/mp3/시도합니다.MP3","WAY1");}, 1000);
        }
        if(voiceCommand.trim()=="날씨"||voiceCommand.trim()=="날씨 어때"){
            setTimeout(() => {mgr_js1.play("/mp3/아직 준비되지 않은 서비스입니다.mp3","WAY1");}, 0);
        }
        if(voiceCommand.trim()=="시간"||voiceCommand.trim()=="몇 시야"){
            setTimeout(() => {mgr_js1.play("/mp3/"+HH2+"시.mp3","WAY1");}, 0);
            setTimeout(() => {mgr_js1.play("/mp3/"+mm2+"분.mp3","WAY1");}, 900);
            setTimeout(() => {mgr_js1.play("/mp3/입니다.mp3","WAY1");}, 1800);
            document.getElementById("clock").hidden = false;
            setTimeout(() => {document.getElementById("clock").hidden = true;}, 15000);
        }
        if(voiceCommand.trim()=="음악"||voiceCommand.trim()=="음악 재생"||voiceCommand.trim()=="음악 켜 줘"||voiceCommand.trim()=="음악 틀어 줘"){
//                var popUrl = "http://localhost:9090/leaf/leaf_sound.html";
//                var name = "_blank";
//                var popOption = "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
////                var delayInMilliseconds = 2000;
//                var delayInMilliseconds = 1500;
//                var tmp_window = window.open(popUrl,name, popOption);
//                setTimeout(function() {
//                    tmp_window.close();
//                }, delayInMilliseconds);
        }
        if(voiceCommand.trim()=="비디오"||voiceCommand.trim()=="비디오 재생"||voiceCommand.trim()=="비디오 켜 줘"||voiceCommand.trim()=="비디오 틀어 줘"){
                var popUrl = "http://localhost:9090/leaf/leaf_video.html";
                var name = "_blank";
                var popOption = "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
                var delayInMilliseconds = 1500;
                var tmp_window = window.open(popUrl,name, popOption);
                setTimeout(function() {
                    tmp_window.close();
                }, delayInMilliseconds);
        }
        if(voiceCommand.trim()=="테스트"){
            document.getElementsByClassName("VoiceCommandInputBox")[0].value="playingSoundFileDuration : "+playingSoundFileDuration;
            document.getElementsByClassName("VoiceCommandInputBox")[0].size=document.getElementsByClassName("VoiceCommandInputBox")[0].value.length;
        }
        if(voiceCommand.trim()=="음악 플레이"||voiceCommand.trim()=="음악 계속 재생"||voiceCommand.trim()=="음악 계속 틀어 줘"){
           audio.play();
        }
        if(voiceCommand.trim()=="음악 정지"){
            audio.pause();
        }
        if(voiceCommand.trim()=="음악 종료"||voiceCommand.trim()=="음악 꺼 줘"||voiceCommand.trim()=="조용히 해"){
           mgr_js1.pause();
        }
        if(voiceCommand.trim()=="소리 줄여"||voiceCommand.trim()=="볼륨 줄여"){
            setTimeout(() => {mgr_js1.play("/mp3/아직 준비되지 않은 서비스입니다.mp3","WAY1");}, 0);
        }
        if(voiceCommand.trim()=="소리 키워"||voiceCommand.trim()=="볼륨 키워"){
            setTimeout(() => {mgr_js1.play("/mp3/아직 준비되지 않은 서비스입니다.mp3","WAY1");}, 0);
        }
        if(voiceCommand.trim()=="불꺼"||voiceCommand.trim()=="불 꺼"||voiceCommand.trim()=="불 꺼 줘"){
            setTimeout(() => {mgr_js1.play("/mp3/아직 준비되지 않은 서비스입니다.mp3","WAY1");}, 0);
        }
        if(voiceCommand.trim()=="불켜"||voiceCommand.trim()=="불 켜"||voiceCommand.trim()=="불 켜 줘"){
            setTimeout(() => {mgr_js1.play("/mp3/아직 준비되지 않은 서비스입니다.mp3","WAY1");}, 0);
        }
        if(voiceCommand.trim()=="누구세요"||voiceCommand.trim()=="너 누구야"){
            setTimeout(() => {mgr_js1.play('/mp3/안녕하세요 저는 리프입니다.mp3','WAY1');}, 0);
        }
        if(voiceCommand.trim()=="누구세요"||voiceCommand.trim()=="너 누구야"){
                //시스템을 종료합니다.
                //windows.close();
//            setTimeout(() => {mgr_js1.play('/mp3/안녕하세요 저는 리프입니다.mp3','WAY1');}, 0);
        }
        //saveVoiceCommandAsTextFile
        //saveTextAsTextFile("voiceCommandLogFile",recSpeak.resultString);  // WAY1
        //saveTextAsTextFile(voiceCommand,recSpeak.resultString);  // WAY2  텍스트 파일명을 다양하게 만들 수 있습니다.

	//text(recSpeak.resultString,5,y);
    // y+=100;
//     y+=50;//toturailize
     y+=20;//toturailize
//    y+=15;//way_mystyle2
//     y+=10;//way_mystyle1
//    y+=5;//way_mystyle1
  }
}


//___________________________________________________________________________________________________ video player via video tag with autoplay
document.getElementById('local_video_player').setAttribute("src","/mp4/EBS 위대한 수업 그레이트 마인즈 Jane Goodall.mp4");
document.getElementById('local_video_player').setAttribute("width", "640");
document.getElementById('local_video_player').setAttribute("height", "480");
document.getElementById('local_video_player').load();
//document.getElementById('local_video_player').pause();
//document.getElementById('local_video_player').volume=1
document.getElementById('local_video_player').volume=0
//document.getElementById('local_video_player').play();
//var autoplayVideoInterval = setInterval("autoplayVideo()",200);
//function autoplayVideo()
//{
//var promise = document.getElementById('local_video_player').play();
//if (promise !== undefined)
//{
//promise.then(function (_)
//{
//clearInterval(autoplayVideoInterval);
//}).catch(function (error) {
//});
//}
//}
//___________________________________________________________________________________________________ video player via youtube iframe_api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtubeVideoAddress ="https://www.youtube.com/watch?v=EbmUK8S9zTI&ab_channel=UEAZ";
var player;
function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
//      videoId: 'xmuyvwv1fH8',//마이클 샌델
//      videoId: '23L_JIjGIbc',//제임스 카메론
      videoId: youtubeVideoAddress.split("=")[1].split("&")[0] ,//UE5 pc 추천
      playerVars: {
      'width': 320,
      'height': 240,
//      'fullscreen': true,
//      'allowfullscreen': true,
//      'style.opacity': 0,
//      'style.opacity': 1,
//      'frameborder': "0",
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'rel': 0,
//            'controls': 0,     //컨트롤 숨김
            'controls': 1,   //컨트롤 표시
            'color':'white',
            'loop': 1,
            'mute':1,
//            'mute':0,
            // 'origin': 'https://meeranblog24x7.blogspot.com/'
      },
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
//    player.playVideo();
//    player.mute();
  }var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

//___________________________________________________________________________________________________ test code storage

//1초 딜레이 하도록
//<!--	var delayInMilliseconds = 1000;-->
//<!--	setTimeout(function() {-->
//<!--	}, delayInMilliseconds);-->

// ES6: String Interpolation
//console.log(`My name is ${first} ${last}.`);
//console.log(`1 + 1 = ${1 + 1}`);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.OutterWidth);
//console.log(window.OutterHeight);
//console.log(screen.width);
//console.log(screen.availWidth);
//console.log(screen.availHeight);
//console.log(screen.height);
//window.devicePixelRatio;
//로그를 텍스트파일로 저장...




//var btn = document.getElementById("myBtn");
//btn.onclick = function(event){
//    console.log(event.type); //click
//};
//
//btn.addEventListener("click", function(event){
//    console.log(event.type); //click
//}, false);




//document.body.onclick = function(event){
//    console.log(event.currentTarget === document.body); //true
//    console.log(this === document.body); //true
//    console.log(event.target === document.getElementById("myBtn"));//true
//}




//하나의 버튼을 누를때 여러 이벤트처리
//var btn = document.getElementById("myBtn");
//var handler = function(event){
//    switch(event.type){
//        case "click":
//            //코드
//            break;
//        case "mouseover":
//            //코드
//            event.target.style.backgroundColor = "red";
//            break;
//        case "mouseout":
//            //코드
//            event.target.style.backgroundColor = "";
//            break;
//    }
//};
//btn.onmouseout = handler;
//btn.onclick = handler;
//btn.onmouseover = handler;


//Focus 이벤트
//blur : 포커스를 잃을때 발생
//focus : 포커스 받을때 발생
//focusin : 포커스 받을때 발생, 버블링 버전입니다.
//focusout : 포커스 잃을때 발생, 버블링 버전입니


//mouse event
//click : 사용자가 클릭하거나 엔터키를 누를때 발생
//dblclick : 더블클릭 때 발생합니다.
//mousedown : 마우스 버튼을 누를때 발생합니다. 키보드에서는 발생하지 않습니다.
//mouseenter : 마우스 커서가 요소 밖에서 안으로 이동할때 발생
//mouseleave : 마우스 커서가 요소 안에서 밖으로 이동할때 발생
//mousemove : 마우스 커서가 요소 위에서 이동하는 동안 계속 발생.
//mouseout : 마우스 커서가 요소 위에 있다가 다른 요소 위로 이동할때 발생
//mouseover : 마우스 커서가 요소 밖에 있다가 요소경계안으로 이동할때 발생
//mouseup : 사용자가 마우스 버튼을 누르고 있다가 놓을 때 발생.
//mousewheel
//scroll

//클라이언트 좌표
//clientX, clientY
//이벤트가 발생한 커서 위치는 event 객체의 clientX, clientY 프로퍼티에 저장됩니다.
//스크롤은 고려되지 않은 위치입니다.
//
//pageX, pageY
//뷰포트 기준으로 좌표를 반환합니다.
//하지만 IE8 이전 버전에서는 지원하지 않기 때문에 clientX 와 scrollLeft값을 더해서 구할 수 있습니다.
//
//screenX, screenY
//현재 모니터에 보이는 화면 전체 해상도에 대한 커서 좌표를 반환합니다.


//keyboard event
//keydown : 사용자가 키를 처음 누를 때 발생, 누르고 있는 동안은 계속 발생
//keypress : 키를 누른 결과로 문자가 입력될 때 발생, 누르고 있는 동안은 계속 발생, DOM 레벨 3에서는 keypress가 삭제되고 대신 textInput 사용권장
//keyup : 사용자가 키에서 손을 떼면 발생
//KeyCode프로퍼티


//matation 이벤트
//DOM의 일부가 바뀌었을 때 알리는 변경 이벤트입니다.
//DOMNodeRemoved : 노드 제거시 발생
//DomNodeInserted : 노드 삽입시 발생





