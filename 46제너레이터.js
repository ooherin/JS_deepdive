//제너레이터 객체
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}
const generator0 = genFunc();

console.log(Symbold.iterator in generator); //true
console.log("next" in generator); //true

function* getFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = getFunc();

//return 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는
//이터레이터 리절트 객체를 반환한다

console.log(generator.return("End!")); //{value : 'End'!, done : true};

//next 메서드를 호출하면 제너레이터 함수의 yield 표현식까지 코드 블록을 실행하고 yield 된 값을 value 프로퍼티
//값으로 false 를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환한다.

console.log(generator.next());
//{value : 1, done : false}
console.log(generator.next());
//{value : 2, done : false}
console.log(generator.next());
//{value : 3, done : false}
console.log(generator.next());
//{value : undefined, done : true}

//제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고
//일시 중지된다, 이때 함수의 제어권이 호출차로 양도된다.

//제너레이터 객체의 next 메서드에 전달한 인수는 제너레잍터 함수의 yield 표현식을 할당받는 변수에 할당된다.

//이때 제너레이터의 객체의 next메서드는 value, done프로퍼티를 갖는
//이터레이터 리절트 객체를 반환한다.
//리절트 객체의 value에는 yield가 반환한값을
//리절트 객체의 done프로퍼티에는 함수가 끝까지 실행되었는지를 나타내는 불리언 값을 반환한다.
