//함수 선언문 
function add(a,b){
  return a + b;
}

//인수 타입 확인하는 법
function add(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new TypeError('인수는 모두 숫자값이여야 합니다!');
  }
  return a + b;
}
console.log(1,r) //typeError

//인수 기본값 정하기 : 인수전달 안할 때와 undefined 방지
function add(a,b,c){
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(add(1,2,3));//6
console.log(add(1,2));//3

//즉시 실행 함수
console.log((function(){
  let a =2 ;
  let b = 3;
  return a * b;
}())); //6



//재귀함수

function countdown(n){
    if(n<0) return;
    console.log(n);
    countdown(n-1); //다시 자신(함수)를 호출함 -> 반복
  }
  countdown(10);
  10,9,8,7,6,5,4,3,2,1,0
//   if의 조건문에 따라 0미만이 되면 탈출
  
//   팩토리얼
  function factorial(n){
    if(n<=1)
      return 1;
   return n * factorial(n-1);
  }
  console.log(factorial(3)); //6
  
//   공통로직은 미리 정의하고, 변경되는 로직은 함수 외부에서 내부로 전달하는 것
  
  //공통함수
  function repeat(n,f){
   for(let i = 0; i < n; i++){
     f(i);
     //f함수에 n을 넣어서 호출
   }
  }
  
  //인수로 들어가는 함수(변경함수)
  const logAll = function(i){
    console.log(i);
  }
  const logOdds = function(i){
    if(i % 2 ) console.log(i);
  }
  
  repeat(10,logAll);
  //0,1,2,3,4,5,6,7,8,9
  repeat(10,logOdds);
  //1,3,5,7,8
  
//   이처럼 함의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 함. 그 함수를 전달받은 최종함수를 고차함수라고 함.
  
//   콜백함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백함수에 인수를 전달 할 수 있다.
  
  repeat(5,function(i){
    if(i %2) console.log(i);
  }) //1 3 
  
//   위 에시의 콜백함수는 함수 리터럴로 만들어졌으며, 이때는 고차함수가 호출될 떄마다 함수 객체를 생성한다.
//   콜백함수가 잘 호출된다면, 함수 외부에서 콜백함수를 정의하는 것이 낫다.위 위 예시처럼
  
  //이벤트 처리 : 콜백함수 사용 예
  document.querySelector('myButton').addEventListener('click', function(){
    console.log('button clicked!');
  })
  
  //배열 고차 함수 : 콜백함수의 사용 예(1)
  let res = [1,2,3].map((v)=>v*2);
  console.log(res);
  //[2,4,6];
  
  //배열 고차 함수 : 콜백함수의 사용 예(2)
  res = [1,2,3].filter((item)=>
    item%2===0
  );
  console.log(res); //[2]
  
  //배열 고차 함수 : 콜백함수의 사용 예(3)
  res = [1,2,3].reduce((acc,cur)=>
                acc += cur);
  console.log(res); //6

  //순수함수
  //순수함수는 동일한 인수가 전달되면 항상 동일한 결과값을 반환하는 함수
  //어떤 외부 상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해
  //값을 생성해 반환함.

  let count1  = 0;
  function increase(n){
    return ++n;
  }
  count1 = increase(count1);
  console.log(count); //1

  count1 = increase(count1);
  console.log(count1); //2

  //비순수함수
  //비순수함수는 인수를 전달받지 않고 함수 내부에서 외부 상태를 직접 
  //참조하게 되어 외부 상태에 의존하게 되고,
  //반환값이 바뀔 수도 잇고, 외부 상태도 변경할 수 있다.

  let count2 = 0;
  function increase1(){
    return ++count2;
  }
  increase();
  console.log(count2);//1
  increase();
  console.log(count2);//2

  //외부 상태를 변경하지 않는 순수함수를 사용하는 것이 바람직하다. 
  


  
  
  
  