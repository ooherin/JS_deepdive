//1. 일반적인 동기 처리 방식 : 블로킹 발생
function sleep(func, delay) {
  const delayUntil = Date.now() + delay;
  while (Date.now() < delayUntil);
  func();
}
function foo() {
  console.log("foo");
}
function boo() {
  console.log("boo");
}
sleep(foo, 3000);
boo();
//(3초 이상)foo boo

//2. 비동기 함수인 setTimeout의 경우
setTimeout(foo, 3000);
boo(); //boo foo
//boo를 블로킹 하지 않는다. setTimeout은 나중에 실행된다
