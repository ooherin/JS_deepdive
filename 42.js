function sleep(func, delay) {
  const delayUntil = Date.now() + delay;
  //현재 시간 보다 delayUntil이 작으면 계속 반복한다.
  //크면 조건이 false가 되어 멈춘다.
  while (Date.now() < delayUntil);
  //func을 호출하는 재귀 함수이다.
  //일정 시간이(delay) 지난 후에 func이 호출된다.
  func();
}
function foo() {
  console.log("foo");
}
function boo() {
  console.log("boo");
}
sleep(foo, 3 * 1000);
boo();
//위 와같은 함수가 실행된다면, sleep은 3초의 딜레이 시간을 갖고 콜백을 호출하므로
//그 뒤의 boo는 3초간 블로킹 된다.

//setTimeOut
function far() {
  console.log("far");
}
function bar() {
  console.log("bar");
}
setTimeout(foo, 3000);
bar();
//bar가 먼저 호출되고 foo가 3초 뒤에 호출된다.
//이를 비동기 처리라고 한다.
