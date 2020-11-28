// 모듈을 추출합니다.
var express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


//로그인
app.post('/login_id', function (request, response) {
    
    const jsonfile = fs.readFileSync('login_data.json', 'utf-8');
    const login_data = JSON.parse(jsonfile);

    var id_n = 0;

    var id = request.body.id;
    var pw = requset.body.pw;
    var find_v = 0;

    while(login_data[id_n]){
        if(login_data[id_n].id == id){
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

    if(login_data[id_n].pw == pw){
        response.send({
            message: '로그인 성공!',
        });
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

    var email = request.body.email;
    var find_v = 0;

    while(login_data[id_n]){
        if(login_data[id_n].email == email){
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

    var id = request.body.id;
    var email = request.body.email;
    var find_v = 0;

    while(login_data[id_n]){
        if(login_data[id_n].id == id){
            if(login_data[id_n].email == email){
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

    var id = request.body.id;
    var pw = request.body.pw;
    var pwcheck = request.body.pwcheck;
    var email = request.body.email;
    var nickname = request.body.nickname;

    while(1){
        if (login_data[id_n]) {
            // 데이터가 존재하면 넘어갑니다.
            id_n = id_n + 1;
        } else {
            // 데이터를 추가합니다.
            var new_login_data = {
                id: id,
                pw: pw,
                pwcheck: pwcheck,
                email: email,
                nickname: nickname
            }
            login_data.push(new_login_data);
            // 응답합니다.
            response.send({
                message: '데이터를 추가했습니다.',
                data: login_data
            });
            break;
        }
    }

    console.log(login_data);
    const write_data = JSON.stringify(login_data);
    fs.writeFileSync('login_data.json', write_data);

});

//마이페이지에서 데이터 변경
app.post('/my_page_new', function (request, response) {
       
    login_data = JSON.parse(fs.readFileSync('login_data.json').toString);
    // 변수를 선언합니다.
    var id_n = 0;
    var id = request.body.id;
    var pw = request.body.pw;
    var pwcheck = request.body.pw;
    var email = request.body.pw;
    var nickname = request.body.pw;
    if (login_data[id_n].id == id) {
        
        login_data[id_n].pw = pw;
        login_data[id_n].pwcheck = pwcheck;
        login_data.email[id_n] = email;
        login_data.nickname[id_n] = nickname;

        response.send({
            message: '데이터를 수정했습니다.',
            data: login_data
        });
    } else {
        //다른 id의 데이터는 넘어갑니다
        id_n = id_n + 1;
    }
});


// 웹 서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});