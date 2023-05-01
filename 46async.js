//async는 프로미스를 기반으로 동작한다. async/await를 사용하면 프로미스의 then/finally/catch
//후속처리 메서드에 콜백함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 마치 동기 처리처럼
//프로미스를 사용할 수 있다.
//다시말해, 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 동작하도록 구현할 수 있는 async/await가
//도입되었다.

//async함수
//await함수는 반드시 async함수 내부에서 사용해야 한다

//async함수 선언문
//function 앞에다가 async를 붙인다.
async function foo(n) {
  return n;
}
foo(1).then((v) => console.log(v)); //1

//async함수 표현식
//function 앞에다가 async를 붙인다
const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v)); //2

//async화살표 함수
//인수 앞에다가 async를 붙인다.
const baz = async (n) => n;
baz(3).then((v) => console.log(v)); //3

//async 메서드
const obj = {
  async foo(n) {
    return n;
  },
};
obj.foo(4).then((v) => console.log(v)); //4

class MyClass {
  async bar(n) {
    return n;
  }
}
const myClass = new MyClass();
myClass.bar(5).then((v) => console.log(v)); //5

//await 키워드
const fetch = require("node-fetch");
const getGithubUserName = async (id) => {
  const res = await fetch(`https://api.github.com/users/${id}`);
  console.log(name);
};
getGithubUserName("ooherin");

//await 키워드는 프로미스가 settle 상태가 될때까지 대기한다. fetch의 함수가 수행한
//HTTP요청에 대한 서버의 응답이 도착해서 fetch 함수가 반환한 프로미스가 settle 상태가
//될때까지
async function foo() {
  const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));
  console.log([a, b, c]); //[1,2,3]
}
foo(); //약 6초 소요됨

//정해진 순서가 필요없는 경우 다음과 같이 처리하는 것이 좋다.
async function foo() {
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);
  console.log(res); //[1,2,3]
}
foo();
//약 3초가 소요된다.

//다음 예시는 다음 프로비스가 실행될때마다 그전 프로미스의 결과가 필요하므로 순차적으로 처리해야 한다.
//그 전 예시처럼 all로 한번에 처리할 수 없다.
async function bar(n) {
  const a = await new Promise((resolve) => setTimeout(() => resolve(n), 3000));
  const b = await new Promise((resolve) =>
    setTimeout(() => resolve(a + 1), 2000)
  );
  const c = await new Promise((resolve) =>
    setTimeout(() => resolve(b + 1), 1000)
  );
  console.log([a, b, c]); //[1,2,3]
}

//에러처리
//비동기 처리 함수의 콜백 함수를 호출한 것은 비동기 함수가 아니기 때문에 try...catch문을 사용해
//에러를 캐치할 수 없다.

//async/await에서 에러 처리는 try/catch문을 사용할 수 있다
//콜배함수를 인수로 전달받은 비동기 함수와 달리 프로미스를 반환하는 비동기 함수는
//명시적으로 호출할 수 있기에 호출자가 명확하다.

const fetch = require("node-fetch");
const foo = async () => {
  try {
    const wrongUrl = "https://wrongsxzz";
    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
foo();

//async 함수내에서 catch문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러 처리를
//reject하는 프로미스를 반환한다.
