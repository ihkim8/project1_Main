/* 
  -함수는 기능, 할일
  *선언부
  function 함수이름 (parameter//매개변수)
  {//실행문} 
  
  *실행문
    함수이름(//인자)
    함수이름(argument)
*/

function h2(){
  //안녕하세요를 400번 출력
  for(var i=1; i<=4; i++){
    document.write(`<h2>안녕하세요 ${i}</h2>`)
  }
}
h2();
function h3(a,b,c){
  for(var i=1; i<=4; i++){
    document.write(`<h3> ${a}</h3>${b}<br>${c}`)
  }
}
h3("hi","회원님","안녕하세요");