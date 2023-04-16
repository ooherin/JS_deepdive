//js는 비동기 처리를 위해 콜백함수를 사용하지만, 콜백 헬의 우려가 있어
//비동기 처리를 위한 또다른 패턴으로 프로미스를 도입했다.

//프로미스 생성
// const promise = new Promise((resolve,reject)=>{
//     if(/*비동기 처리 성공*/){
//         resolve('result');
//     }else{/*비동기 처리 실패 */
//         reject('failure reason')
//     }
// })

//프로미스
//프로미스는 다음과 같이 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는
//상태 정보를 갖는다
//pending : 비동기 처리가 아직 수행되지 않은 상태
//fulfilled : 비동기 처리가 수행된 상태(resolve) => resolve 호출
//rejected : 비동기 처리가 수행된 상태(실패) => reject 호출

//fulfilled된 프로미스
// const fulfilled = new Promise((resolve) => resolve(1));
// const rejected = new Promise((_, reject) => reject(new Error("error occured")));

//프로미스의 후속 메서드 : then, catch, finally

//1. Promise.prototype.then
//then은 두개 의 콜백함수를 인수로 전달받는다
//첫번째 콜백함수는 프로미스가 fulfilled상태가 되면 호출된다. 프로미스의 비동기처리 결과를 인수로
//전달받는다
//두번째 콜백함수는 프로미스가 rejected 상태가 되면 호출된다. 프로미스의 에러를
//전달받는다
new Promise((resolve) => resolve("fulfilled")).then(
  (v) => console.log(v),
  (e) => console.error(e)
);
//fulfilled

// new Promise((reject) => reject(new Error("rejected"))).then(
//   (v) => console.log(v),
//   (e) => console.error(e)
// );
//Error: rejected

//2. Promise.prototype.catch
//catch메서드는 하나의 콜백함수를 인자로 받는다.
//catch의 콜백함수는 프로미스가 rejected인 상태일때만 호출된다.
// new Promise((_, reject) => reject(new Error("rejected"))).catch((e) =>
//   console.log(e)
// );
//Error: rejected
//catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면
//비동기 처리에서 발생한 에러 뿐만 아니라 then메서드에서 발생한 에러까지 모두 캐치할 수 있다.
//에러처리는 then(두번째 메소드)보다 catch메서드에서 하는 것이 좋다.

//3. Promise.prototype.finally
//finally의 메서드는 한 개의 콜백 함수를 인수로 전달받는다.
//프로미스의 성공, 실패와 상관없이 무조건 한번 호출된더,
//항상 실행되야 할 공통적인 내용이 있을 때 유리하다.
//then,catch와 마찬가지로 언제나 promise를 반환한다.

new Promise(() => {}).finally(() => console.log("finally"));
//'finally'

//프로미스로 구현한 get을 후속처리로 구현
const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status()));
      }
    };
  });
};
promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("Bye!"));

//프로미스의 에러 처리
//1. 비동기 처리에서 발생한 error는 then의 두번째 메서드의 콜백함수로 처리 가능
const wrongUrl = "https://www.이건url이아니다!!";
promiseGet(wrongUrl).then(
  (res) => console.log(res),
  (err) => console.log(err)
);
//error : 404

//2. catch를 사용해서도 처리 가능
promiseGet(wrongUrl)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//catch메서드를 모든 then메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러 rejected
//에러 뿐만 아니라 then메서드 내부에서의 에러까지 모두 캐치 가능하다.

promiseGet(goodurl)
  .then((res) => console.xxx(res))
  .catch((err) => console.error(err));

//p.857
//프로미스 체이닝
//id가 1인 post의 userId를 취득함
promiseGet(`{url}/posts/1`)
  //userId를 받아 user 정보를 취득함.
  .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.error(err));

//then => then => catch 순으로 후속 처리 메서드를 호출했다.
//이 후속 처리 메서드들은 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있는데
//이를 프로미스 체이닝이라고 한다.

//1. 첫번째 then : 인수 > promiseGet함수가 반환한 프로미스가 resolve한 값
//2. 두번째 then : 인수 > 첫번째 then 메서드가 반환한 프로미스가 resolve한 값 (user 정보)
//3. catch : 인수 > 앞에 함수 또는 메서드들이 반환한 프로미스가 reject한 값
//catch는 에러가 일어나지 않으면 실행되지 않는다.

//프로미스의 정적 메서드
//Promise.resolve
//Promise.reject
//인수로 전달받은 값을 각각 resolve,reject하는 프로미스를 생성한다.
const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log); //[1,2,3]

const rejectPromise = Promise.reject(new Error("error!"));
rejectPromise.catch(console.log); //Error
//Promise.all
//여러개의 비동기 처리를 병렬 처리할 때 사용한다.
//배열등의 이터러블을 인수로 전달받는다.
//전달받은 모든 프로미스가 fulfilled상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를
//반환한다.
//걸린 시간과 상관없이 적은 순서대로 프로미스를 반환한다. 처리순서를 보장한다.
const request1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const request2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const request3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

//위와 같이 여러개의 비동기 처리를 순차적으로 처리할 필요가 없을 경우 Promise.all을 쓴다
Promise.all([request1(), request2(), request3()])
  .then(console.log)
  .catch(console.error);
//[1,2,3]=> 약 3초 소요

//그러나 에러는 하나라도 먼저 error가 뜨면 반환하고 종료한다.
//전달한 이터러블이 프로미스가 아닌 경우 promise.resolve()로 매핑한다.

//서버 불러오기 생략
const githubIds = ["jin00", "momo11", "ya22"];
Promise.all(
  githubIds.map((id) => promiseGet(`https://api.github.com/users/${id}`))
)
  //['jin00','momo11','ya22'] => Promise[userInfo, userInfo, userInfo]
  .then((users) => users.map((user) => user.name))
  //[userInfo, userInfo, userInfo] => Promise ['Kim suckjin','Kim momo','Yun jisu']
  .then(console.log)
  .catch(console.error);

//Promise.race
//all과 달리 하나라도 fulfilled되면 그 프로미스의 처리 결과를 resolve하는
//새로운 프로미스를 반환한다.
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), //1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), //2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), //3
])
  .then(console.log) //3
  .catch(console.log);

//Promise.allSettled
Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("error")), 1000)
  ),
]).then(console.log);

//마이크로태스크 큐
setTimeout(() => console.log(1), 0);
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
//2 3 1 순으로 출력
//setTimeout은 태스크 큐에서 출력된다
//프로미스의 콜백함수는 태스크 큐가 아닌 마이크로 태스크 큐에서 출력된다.
//우선순위는 마이크로태스크 큐가 더 높다.


