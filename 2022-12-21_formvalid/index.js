var express = require('express'); // require 는 nodejs에서 다른 패키지를 불러올 때 사용 되는 키워드(: node_modules에서 express라는 모듈을 활용한다. 라는 뜻)
var app = express();
app.use(express.urlencoded({extended: true}))
app.post('/', function(req, res){ // REST API 의 한가지 종류인 POST 리퀘스트를 정의하는 부분(EX. get, post, update, delete 등) // 첫번 째 파라미터는 url 정의(‘/’), 두번째 파라미터는 해당 url에서 수행할 작업 및 응답을 정의 두번째 파라미터 함수는 두개의 파라미터를 받는데, 요청에 해당하는 req (request) 와 응답에 해당하는 res (response)
  console.log('클라이언트로부터 온 요청 : ' + req.body.userId);
  console.log('클라이언트로부터 온 요청 : ' + req.body.password);
  console.log('클라이언트로부터 온 요청 : ' + req.body.food);
  res.json({"message" : "정상적으로 서버에 전달되었습니다"}); // res 파라미터에 json 형태의 {}를 전송
})
var port = process.env.PORT || 8080; // process.env 는 nodejs에서 환경 변수를 가져올 때 사용, 환경 변수가 입력되지 않을 시 port에 8080번을 지정하라는 뜻
app.listen(port, ()=> {console.log("포트 : " + port + " 을 열고 서버 동작 중 . . .");});