function* genFunc() {
  //처음 next 메서드를 호출하면 첫 번째 yield 표현식까지 실행되고 일시 중지 된다.
  //이때 yield의 값 1은 next 메서드가 반환한 이터레이터 리절트 객체의 value에 할당된다.
  //아직 x에 할당되지 않았다. 그 다음 next 메서드가 호출될때 이것이 결정된다.
  const x = yield 1;
  //두번째 next 메서드를 호출할 때 전달한 인수 10은 첫번째 yield표현식을 할당받는
  //x변수에 할당된다. 즉, const x= yield 1 는 두번째 next 메소드를 호출했을 때
  //완료된다. 두번째 next 메서드를 호출하면 두번째 yield 표현식까지 실행되고 일시 중지된다.
  //yield된 값 x+10은 next 메서드가 반환한 객체의 value에 할당된다.
  //아직 y는 정해지지 않았다.
  const y = yield x + 10;
  //세번째 next 메서드를 호출할 때 전달한 인수 20은 두번쨰 yield 표현식을 할당받는
  //y변수에 할당된다.
  //이때 const y = yield x + 10 이 완료된다.
  //세번째 next 메서드 함수를 호출하면 함수 끝까지 실행된다.
  //이때 제너레이터 함수의 반환값인 x+y는 next메서드가 반환한 이터레이터 객체의 value 에
  //할당된다. 따라서 제너레이터에서는 값을 반환할 필요가 없고 return은 종료의 의미로만 사용한다.

  //제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
  //이터러블이며 동시에 이터레이터인 제너레이터 객체는 next 메서드를 갖는다.
  const generator = new genFunc();

  //첫번쨰 호출하는 next 메서드에는 인수를 전달하지 않는다.
  //만약 처음 호출하는 next 메서드에 인수를 전달하면 무시된다.
  //next메서드가 반환한 객체의 value에는 첫번쨰 yield된 값인 1이 할당된다.
  let res = generator.next();
  console.log(res); //{value : 1, done : false}

  //next메서드에 인수로 전달한 10은 genFunc함수의 x변수에 할당된다.
  //value에는 두번쨰 yield된 값인 20이 할당된다.
  res = generator.next(10);
  console.log(res); //{value : 20, done : false}

  //next메서드에 인수로 전달한 20은 y에 할당된다.
  //next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 제너레이터 함수의 반환값 30이 할당된다.
  res = generator.next(20);
  console.log(res); //{value : 30, done : true}
}
//요약하자면 처음에는 바로 1을 할당하므로 인수를 전달할 필요가 없다.
//한 문장은 다음 next가 실행되어야 변수에 값이 할당되고 종료한다.
//next메서드가 반환한 객체의 value프로퍼티는 yield 값을 반환하며
//최종적으로는 return 문을 반환하고 종료한다.
//yield를 먼저 value로 반환하고, 그 다음에 변수를 할당하는 식
//yield와 변수를 이분법적으로 봐도 좋다.

//제너레이터의 활용
//이터러블의 구현
//무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function () {
  let [pre, cur] = [0, 1];
  return {
    //현재수를 계속 누적하는 Symbol.iterator를 만든다.
    //iterator의 기능인 next로 계속해서 값을 누적시킨 값을
    //반환한다.
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
})();

//infiniteFibonacci함수를 1000이 될때까지 계속해서 찍는다.
for (const num of infiniteFibonacci) {
  if (num > 1000) break;
  console.log(num);
} //1,2,3,5,8.....


//비동기 처리
const fetch = require('node-fetch');
const async = generatorFunc => {
    const generator = generatorFunc();
    const onResolved = arg => {
        const result = generator.next(arg);
        return result.done
        ? result.value
        : result.value.tehn(res => onResolved(res));
    };
    return onResolved;
};
(async(function* fetchTodo(){
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = yield fetch(url);
    const todo = yield response.json();
    console.log(todo);
})());