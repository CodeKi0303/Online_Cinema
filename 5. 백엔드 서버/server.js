﻿// 모듈을 추출합니다.
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
const fs = require('fs');
const { kMaxLength } = require('buffer');


// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//전역변수
let id_n_temp = 0;
global.id_n_temp = id_n_temp;

function template_CINEMATOWN(nick, mov){
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8" />
        <!--한글이 깨짐을 방지-->
        <title>CINEMATOWN</title>
        <link rel="shortcut icon" type="image/x-icon" href="./CINEMA.png">
        <!--favicon 삽입-->
        <link rel="stylesheet" href="./CINEMATOWN.css">
        <!-- CINEMATOWN.css 불러오기-->
        <script type="text/javascript" src="./CINEMATOWN.js" async></script>
    </head>
    
    <body bgcolor="black">
        <!--백그라운드 컬러-->
        <header>
            <div id="header-title">
                <!--가운데 정렬용 div-->
                <img src="CINEMATOWN.png" alt="CINEMATOWN" width="200" height="50">
            </div>
    
            <div id="header-menu">
                <form action="/mypage" method='post'> 
                    <button type="submit">My page</button>
                </form>
            </div>
    
            <div id="header-yourgenre">
                <br>
                    <h1>${nick}</nick>님 반갑습니다. 추천 영화 장르는 ${mov}</mov> 입니다.</h1>
                <br>
            </div>
    
        </header>
    
        <div id="header-yourgenre">
            <br>
                <h1>액션</h1>
            <br>
        </div>
        <div class="slide_wrapper1">
            <ul class="slides1">
                <li>
                    <a href="https://www.youtube.com/watch?v=gg22TMYpkxk"><img src="./액션/1.jpg" alt="킹덤 오브 헤븐: 디렉터스 컷" width="300" height="400"></a>
                </li>
                <li><img src="./액션/2.jpg" alt="다만 악에서 구하소서 파이널컷" width="300" height="400"></li>
                <li><img src="./액션/3.jpg" alt="엣지 오브 투모로우" width="300" height="400"></li>
                <li><img src="./액션/4.jpg" alt="그린랜드" width="300" height="400"></li>
                <li><img src="./액션/5.jpg" alt="국제수사" width="300" height="400"></li>
                <li><img src="./액션/6.jpg" alt="검객" width="300" height="400"></li>
                <li><img src="./액션/7.jpg" alt="뉴 뮤턴트" width="300" height="400"></li>
                <li><img src="./액션/8.jpg" alt="에이바" width="300" height="400"></li>
                <li><img src="./액션/9.jpg" alt="드라이브" width="300" height="400"></li>
                <li><img src="./액션/10.jpg" alt="테넷" width="300" height="400"></li>
                <li><img src="./액션/11.jpg" alt="프로젝트 파워" width="300" height="400"></li>
                <li><img src="./액션/12.jpg" alt="인셉션" width="300" height="400"></li>
            </ul>
        </div>
        <p class="controls1">
            <span class="prev1">◁</span>
            <span class="next1">▷</span>
        </p>
    
        <main>
            <drama>
                <div id="header-yourgenre">
                    <br>
                    <h1>드라마</h1>
                    <br>
                </div>
                <div class="slide_wrapper2">
                    <ul class="slides2">
                        <li><img src="./드라마/1.jpg" alt="잠수종과 나비" width="300" height="400"></li>
                        <li><img src="./드라마/2.jpg" alt="프랑스여자" width="300" height="400"></li>
                        <li><img src="./드라마/3.jpg" alt="애비규환" width="300" height="400"></li>
                        <li><img src="./드라마/4.jpg" alt="내가 죽던 날" width="300" height="400"></li>
                        <li><img src="./드라마/5.jpg" alt="걸후드" width="300" height="400"></li>
                        <li><img src="./드라마/6.jpg" alt="찬실이는 복도 많지" width="300" height="400"></li>
                        <li><img src="./드라마/7.jpg" alt="지옥의 묵시록" width="300" height="400"></li>
                        <li><img src="./드라마/8.jpg" alt="마틴 에덴" width="300" height="400"></li>
                        <li><img src="./드라마/9.jpg" alt="불의 전차" width="300" height="400"></li>
                        <li><img src="./드라마/10.jpg" alt="위플래쉬" width="300" height="400"></li>
                        <li><img src="./드라마/11.jpg" alt="테슬라" width="300" height="400"></li>
                        <li><img src="./드라마/12.jpg" alt="레베카" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls2">
                    <span class="prev2">◁</span>
                    <span class="next2">▷</span>
                </p>
            </drama>
    
            <melomance>
                <div id="header-yourgenre">
                    <br>
                    <h1>멜로/로맨스</h1>
                    <br>
                </div>
                <div class="slide_wrapper3">
                    <ul class="slides3">
                        <li><img src="./멜로맨스/1.jpg" alt="노트북" width="300" height="400"></li>
                        <li><img src="./멜로맨스/2.jpg" alt="나의 이름" width="300" height="400"></li>
                        <li><img src="./멜로맨스/3.jpg" alt="애프터: 그 후" width="300" height="400"></li>
                        <li><img src="./멜로맨스/4.jpg" alt="나의 소녀시대" width="300" height="400"></li>
                        <li><img src="./멜로맨스/5.jpg" alt="소년시절의 너" width="300" height="400"></li>
                        <li><img src="./멜로맨스/6.jpg" alt="시,나리오" width="300" height="400"></li>
                        <li><img src="./멜로맨스/7.jpg" alt="너는 달밤에 빛나고" width="300" height="400"></li>
                        <li><img src="./멜로맨스/8.jpg" alt="비커밍 제인" width="300" height="400"></li>
                        <li><img src="./멜로맨스/9.jpg" alt="동감" width="300" height="400"></li>
                        <li><img src="./멜로맨스/10.jpg" alt="레이니 데이 인 뉴욕" width="300" height="400"></li>
                        <li><img src="./멜로맨스/11.jpg" alt="라스트 크리스마스" width="300" height="400"></li>
                        <li><img src="./멜로맨스/12.jpg" alt="캔 유 킵 어 시크릿?" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls3">
                    <span class="prev3">◁</span>
                    <span class="next3">▷</span>
                </p>
            </melomance>
    
            <comedy>
                <div id="header-yourgenre">
                    <br>
                    <h1>코미디</h1>
                    <br>
                </div>
                <div class="slide_wrapper4">
                    <ul class="slides4">
                        <li><img src="./코미디/1.jpg" alt="어디갔어, 버나뎃" width="300" height="400"></li>
                        <li><img src="./코미디/2.jpg" alt="죽지않는 인간들의 밤" width="300" height="400"></li>
                        <li><img src="./코미디/3.jpg" alt="프란시스 하" width="300" height="400"></li>
                        <li><img src="./코미디/4.jpg" alt="지니어스 독" width="300" height="400"></li>
                        <li><img src="./코미디/5.jpg" alt="오! 문희" width="300" height="400"></li>
                        <li><img src="./코미디/6.jpg" alt="원챈스" width="300" height="400"></li>
                        <li><img src="./코미디/7.jpg" alt="태백권" width="300" height="400"></li>
                        <li><img src="./코미디/8.jpg" alt="작은 소망" width="300" height="400"></li>
                        <li><img src="./코미디/9.jpg" alt="어서오시게스트하우스" width="300" height="400"></li>
                        <li><img src="./코미디/10.jpg" alt="오케이 마담" width="300" height="400"></li>
                        <li><img src="./코미디/11.jpg" alt="로마 위드 러브" width="300" height="400"></li>
                        <li><img src="./코미디/12.jpg" alt="나의 첫 번째 슈퍼스타" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls4">
                    <span class="prev4">◁</span>
                    <span class="next4">▷</span>
                </p>
            </comedy>
    
            <family>
                <div id="header-yourgenre">
                    <br>
                    <h1>가족</h1>
                    <br>
                </div>
                <div class="slide_wrapper5">
                    <ul class="slides5">
                        <li><img src="./가족/1.jpg" alt="담쟁이" width="300" height="400"></li>
                        <li><img src="./가족/2.jpg" alt="조금씩, 천천히 안녕" width="300" height="400"></li>
                        <li><img src="./가족/3.jpg" alt="용길이네 곱창집" width="300" height="400"></li>
                        <li><img src="./가족/4.jpg" alt="아빠는 예쁘다" width="300" height="400"></li>
                        <li><img src="./가족/5.jpg" alt="안녕 베일리" width="300" height="400"></li>
                        <li><img src="./가족/6.jpg" alt="나만 없어 고양이" width="300" height="400"></li>
                        <li><img src="./가족/7.jpg" alt="베카신!" width="300" height="400"></li>
                        <li><img src="./가족/8.jpg" alt="덤보" width="300" height="400"></li>
                        <li><img src="./가족/9.jpg" alt="썬키스 패밀리" width="300" height="400"></li>
                        <li><img src="./가족/10.jpg" alt="히치하이크" width="300" height="400"></li>
                        <li><img src="./가족/11.jpg" alt="스탠딩 업" width="300" height="400"></li>
                        <li><img src="./가족/12.jpg" alt="호두까기인형 3D" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls5">
                    <span class="prev5">◁</span>
                    <span class="next5">▷</span>
                </p>
            </family>
    
            <animation>
                <div id="header-yourgenre">
                    <br>
                    <h1>애니</h1>
                    <br>
                </div>
                <div class="slide_wrapper6">
                    <ul class="slides6">
                        <li><img src="./애니/1.jpg" alt="애니멀 크래커" width="300" height="400"></li>
                        <li><img src="./애니/2.jpg" alt="트롤: 월드 투어" width="300" height="400"></li>
                        <li><img src="./애니/3.jpg" alt="수퍼 소닉" width="300" height="400"></li>
                        <li><img src="./애니/4.jpg" alt="스파이 지니어스" width="300" height="400"></li>
                        <li><img src="./애니/5.jpg" alt="겨울왕국 2" width="300" height="400"></li>
                        <li><img src="./애니/6.jpg" alt="아담스 패밀리" width="300" height="400"></li>
                        <li><img src="./애니/7.jpg" alt="빅트립: 아기팬더 배달 대모험" width="300" height="400"></li>
                        <li><img src="./애니/8.jpg" alt="아이언 자이언트" width="300" height="400"></li>
                        <li><img src="./애니/9.jpg" alt="플레이모빌: 더 무비" width="300" height="400"></li>
                        <li><img src="./애니/10.jpg" alt="지구공룡대탐험" width="300" height="400"></li>
                        <li><img src="./애니/11.jpg" alt="극장판 포켓몬스터 뮤츠의 역습 EVOLUTION" width="300" height="400"></li>
                        <li><img src="./애니/12.jpg" alt="극장판 짱구는 못말려: 신혼여행 허리케인~ 사라진 아빠!" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls6">
                    <span class="prev6">◁</span>
                    <span class="next6">▷</span>
                </p>
            </animation>
    
            <horror>
                <div id="header-yourgenre">
                    <br>
                    <h1>공포</h1>
                    <br>
                </div>
                <div class="slide_wrapper7">
                    <ul class="slides7">
                        <li><img src="./공포/1.jpg" alt="더 렌탈: 소리없는 감시자" width="300" height="400"></li>
                        <li><img src="./공포/2.jpg" alt="미드소마" width="300" height="400"></li>
                        <li><img src="./공포/3.jpg" alt="더 터닝" width="300" height="400"></li>
                        <li><img src="./공포/4.jpg" alt="더 보이" width="300" height="400"></li>
                        <li><img src="./공포/5.jpg" alt="세인트 아가타" width="300" height="400"></li>
                        <li><img src="./공포/6.jpg" alt="더 보이 2: 돌아온 브람스" width="300" height="400"></li>
                        <li><img src="./공포/7.jpg" alt="인비저블맨" width="300" height="400"></li>
                        <li><img src="./공포/8.jpg" alt="카운트다운" width="300" height="400"></li>
                        <li><img src="./공포/9.jpg" alt="매리" width="300" height="400"></li>
                        <li><img src="./공포/10.jpg" alt="47미터 2" width="300" height="400"></li>
                        <li><img src="./공포/11.jpg" alt="요가학원: 죽음의 쿤달리니" width="300" height="400"></li>
                        <li><img src="./공포/12.jpg" alt="기기괴괴 성형수" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls7">
                    <span class="prev7">◁</span>
                    <span class="next7">▷</span>
                </p>
            </horror>
    
            <thriller>
                <div id="header-yourgenre">
                    <br>
                    <h1>스릴러</h1>
                    <br>
                </div>
                <div class="slide_wrapper8">
                    <ul class="slides8">
                        <li><img src="./스릴러/1.jpg" alt="팔로우 미" width="300" height="400"></li>
                        <li><img src="./스릴러/2.jpg" alt="언힌지드" width="300" height="400"></li>
                        <li><img src="./스릴러/3.jpg" alt="디바" width="300" height="400"></li>
                        <li><img src="./스릴러/4.jpg" alt="아무도 없다" width="300" height="400"></li>
                        <li><img src="./스릴러/5.jpg" alt="존 윅" width="300" height="400"></li>
                        <li><img src="./스릴러/6.jpg" alt="팬데믹" width="300" height="400"></li>
                        <li><img src="./스릴러/7.jpg" alt="언더워터" width="300" height="400"></li>
                        <li><img src="./스릴러/8.jpg" alt="사냥의 시간" width="300" height="400"></li>
                        <li><img src="./스릴러/9.jpg" alt="서치 아웃" width="300" height="400"></li>
                        <li><img src="./스릴러/10.jpg" alt="아내를 죽였다" width="300" height="400"></li>
                        <li><img src="./스릴러/11.jpg" alt="굿 라이어" width="300" height="400"></li>
                        <li><img src="./스릴러/12.jpg" alt="닥터 슬립" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls8">
                    <span class="prev8">◁</span>
                    <span class="next8">▷</span>
                </p>
            </thriller>
    
            <adventure>
                <div id="header-yourgenre">
                    <br>
                    <h1>모험</h1>
                    <br>
                </div>
                <div class="slide_wrapper9">
                    <ul class="slides9">
                        <li><img src="./모험/1.jpg" alt="뮬란" width="300" height="400"></li>
                        <li><img src="./모험/2.jpg" alt="콜 오브 와일드" width="300" height="400"></li>
                        <li><img src="./모험/3.jpg" alt="프리즌 이스케이프" width="300" height="400"></li>
                        <li><img src="./모험/4.jpg" alt="라이온 킹" width="300" height="400"></li>
                        <li><img src="./모험/5.jpg" alt="알라딘" width="300" height="400"></li>
                        <li><img src="./모험/6.jpg" alt="돈키호테를 죽인 사나이" width="300" height="400"></li>
                        <li><img src="./모험/7.jpg" alt="왕이 될 아이" width="300" height="400"></li>
                        <li><img src="./모험/8.jpg" alt="후드" width="300" height="400"></li>
                        <li><img src="./모험/9.jpg" alt="베일리 어게인" width="300" height="400"></li>
                        <li><img src="./모험/10.jpg" alt="신비한 동물들과 그린델왈드의 범죄" width="300" height="400"></li>
                        <li><img src="./모험/11.jpg" alt="곰돌이 푸 다시 만나 행복해" width="300" height="400"></li>
                        <li><img src="./모험/12.jpg" alt="조선명탐정: 흡혈괴마의 비밀" width="300" height="400"></li>
                    </ul>
                </div>
                <p class="controls9">
                    <span class="prev9">◁</span>
                    <span class="next9">▷</span>
                </p>
                <br>
            </adventure>
        </main>
    
        <footer>
    
        </footer>
    
    </body>
    
    </html>`
    
}

//로그인
app.post('/login', function (request, response) {
    
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);

    var id_n = 0;

    var find_v = 0;

    while(login_data[id_n]){        
        if(login_data[id_n].id == request.body.id){
            id_n_temp = id_n;
            find_v = 1;
            break;
        }else{
            id_n = id_n + 1;
        }
    }

    if(find_v == 0){
        response.send({
            message: '등록된 id가 아닙니다',
        });
    }

    if(login_data[id_n].pw == request.body.pw){
        const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
        const login_data = JSON.parse(jsonfile);
        var id_n = id_n_temp;
        var template = template_CINEMATOWN(login_data[id_n].nickname, login_data[id_n].mov);
        fs.writeFileSync('./public/3.home/CINEMATOWN.html', template);
        response.redirect('/3.home/CINEMATOWN.html');
    }else{
        response.send({
            message: '비밀번호가 틀립니다.',
        });
    }
});

//아이디 찾기
app.post('/find_id', function (request, response) {
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = 0;

    var find_v = 0;

    while(login_data[id_n]){
        if(login_data[id_n].email == request.body.email){
            response.send({
                message: 'id는 아래와 같습니다.',
                id: login_data[id_n].id
            });
            find_v = 1;
        }else{
            id_n = id_n + 1;
        }
    }

    if(find_v == 0){
        response.send({
            message: '등록된 이메일이 아닙니다.'
        });
    }
});

//비밀번호 찾기
app.post('/find_pw', function (request, response) {
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = 0;

    var find_v = 0;

    while(login_data[id_n]){
        if(login_data[id_n].id == request.body.id){
            if(login_data[id_n].email == request.body.email){
                response.send({
                    message: 'pw는 아래와 같습니다.',
                    pw: login_data[id_n].pw
                });
                find_v = 1;
            }else{
                response.send({
                    message: '등록된 email이 아닙니다.',
                });
            }
        }else{
            id_n = id_n + 1;
        }
    }

    if(find_v == 0){
        response.send({
            message: '등록된 id가 아닙니다.'
        });
    }
});

//회원가입
app.post('/sign_up', function (request, response) {
    // 변수를 선언합니다.

    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = 0;


    while(1){
        if (login_data[id_n]) {
            // 데이터가 존재하면 넘어갑니다.
            id_n = id_n + 1;
        } else {
            // 데이터를 추가합니다.
            var new_login_data = {
                id: request.body.id,
                pw: request.body.pw,
                email: request.body.email,
                nickname: request.body.nickname,
                age: "10",
                gender: "male",
                mov: "action"
            }
            login_data.push(new_login_data);
            // 응답합니다.
            response.redirect('/2.login/login.html');
            break;
        }
    }

    console.log(login_data);
    const write_data = JSON.stringify(login_data);
    fs.writeFileSync('login_data.json', write_data);

    response.redirect('/2.login/login.html')
});

app.post('/mypage', function (request, response){
    response.redirect('/1.mypage/mypage_new.html')
});

app.post('/home', function (request, response){
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = id_n_temp;
    var template = template_CINEMATOWN(login_data[id_n].nickname, login_data[id_n].mov);
    fs.writeFileSync('./public/3.home/CINEMATOWN.html', template);
    response.redirect('/3.home/CINEMATOWN.html')
});

app.post('/edit', function (request, response){
    response.redirect('/2.login/edit_info.html')
});

//마이페이지에서 데이터 변경
app.post('/edit_info', function (request, response) {
       
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = id_n_temp;

    var pw = request.body.pw;
    var email = request.body.pw;
    var nickname = request.body.pw;
 
    login_data[id_n].pw = pw;
    login_data[id_n].email = email;
    login_data[id_n].nickname = nickname;

    const write_data = JSON.stringify(login_data);
    fs.writeFileSync('login_data.json', write_data);

    // 응답합니다.
    response.redirect('/1.mypage/mypage_new.html')
});

app.post('/survey', function (request, response) {
       
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);
    var id_n = id_n_temp;

    var age = request.body.age;
    var gender = request.body.gender;
    var mov = request.body.mov;
    
    login_data[id_n].age = age;
    login_data[id_n].gender = gender;
    login_data[id_n].mov = mov;

    const write_data = JSON.stringify(login_data);
    fs.writeFileSync('login_data.json', write_data);

    response.redirect('/1.mypage/mypage_new.html')
});



// 웹 서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});