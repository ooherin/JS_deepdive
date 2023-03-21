let num1 = 1; //가장 바깥에서 선언된 함수 : O
if(true){
    let num2 = 2; //코드 블록 내에서 선언된 함수 : 0
    if(true){
        let num3 = 3; //중첩된 코드 블록 내에서 선언된 함수 : 0
    }
}
function foo(){
    let num4 = 4; //함수 내에서 선언된 함수 : x
    function boo(){
        let num5 = 5; //중첩된 함수 내에서 선언된 함수 : x
    }
}

let  x= 'global';
function foo(){
    let x = 'local'; //local
}
foo();
console.log(x); //global

//x는 이름이 동일하지만 서로 전혀 다른 별개의 변수이다.

//렉시컬 스코프
let k = 1;
function foo(){
  let k =2;
  bar();
}
function bar(){
  console.log(k);
}
bar();//1

 