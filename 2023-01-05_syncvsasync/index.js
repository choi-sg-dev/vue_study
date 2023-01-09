var fs = require("fs");
console.log("시작: " + new Date().toISOString());

// 동기 파일읽기 시작
/*var data = fs.readFileSync('movies.json');
console.log("동기 파일 읽기: " + new Date().toISOString() + " "+ data.toString());*/

fs.readFile('movies.json', function(err, data){
  if(err) { return console.log(err); }
  console.log("비동기 파일 읽기: " + new Date().toISOString() + " " + data.toString());
});

// 동기 파일읽기 마침

console.log("종료: " + new Date().toISOString());



/*

readFileSync(동기식), readFile(비동기식)
movies.json 에 접근해 data를 가져오는 동안. 멈추지 않고 다음으로 넘어간다

*/