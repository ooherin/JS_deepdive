//조건문 
//if문
let num = 2;
let result;
if(num > 0 ){
    result = '양수';
}else if(num < 0 ){
    result = '음수';
}else{
    result = '0'
}
console.log(result);

//물음표 연산자로 바꾸기
let num1 = 2;
let result2 = (num1>0)? '양수': (num1<0)? '음수': 0;
console.log(result2);

//switch문 : break문 꼭 사용해야 함!

// switch(인수){
//     case1 : case1 때 실행;
//      break;
//     case2 : case2 때 실행;
//      break;
// }
let year = 2000;
let month = 2;
let days = 0;
switch(month){
    case 1 : case 3: case 5 : case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4 : case 6 : case 9: case 11:
        days = 30;
        break;
    case 2 : 
        days = (year%4 === 0 && year%100 !== 0)||(year % 400 === 0)? 29 : 28;
        break;
    dafault: 
        console.log('날짜를 잘못 입력했습니다!');}
console.log(days);

//반복문 
//for문 : 초등학교 반 만들기
for(let i = 1; i < 7 ; i++){
    for(let j = 1; j < 9; j++){
        console.log(`${i}학년 ${j}반`)
    }
}

//while문 : 조건이 거짓이 되지 전까지 무한 시행. 조건식이 항상 참이면 결과 무한 루프..주의
let count = 0 ;
while(count < 3) {
    console.log(count);
    count++;
}
//0 1 2

//while문 탈출법 : if문으로 조건만들어서 true되면 탈출
let count1 = 0; 
while (true){
    console.log(count1);
    count1++;
    //만약 count1이 2면 while문 탈출!
    //break는 if문에서 쓴게 아니라, while문 안에서 작동
    if(count1 === 2) break;
} // 0 1

//break문: switch, while문에서 사용. if문에서 사용x
let string = 'hello world!';
let letter = 'r';
let index;
for(let a = 0; a < string.length; a++){
    if(string[a] === letter){
        index = a;
        break;  //결과 나오면 for문 탈출
    }
}
console.log(index); //8

//continue문 : 반복문의 코드실행을 중단하고 반복문의 증감식으로 실행함. 
              //즉, 그 다음코드는 실행하지 않지만 완전히 반복문을 빠져나오지 않음. skip하는 것
let number = 0;
for (let b= 0; b < string.length; b++){
    if(string[b]!==letter){
        continue; //letter가 아니면 증감식으로 이동한다. 다음 number식이 실행되지 않는다. 
        number += 10; //if문 밖에서 작성된 코드이다. continue문을 썻기에 가능하다. 
    }
}
console.log(number);

