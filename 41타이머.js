// let count =1;
// const timeoutId = setInterval(()=>{
//     console.log(count);
//     if(count++ === 5)
//     clearInterval(timeoutId);},1000
//     )
setTimeout(function () {
  let name = "rin";
  console.log(`hi ${name}`), 3000;
});

//전달할 인수가 있다면 두번째에 전달한다.
setTimeout((name) => {
  `hi ${name}`, "jenny";
});

//3초마다 count가 하나씩 찍힘. count는 1씩 증가하며 5를 내보내고 끝남
//setTimeout은 고유의 타이머 id를 반환한다. 이를 clearTimeout 함수의 인자러
//전달하여 타이머를 취소할 수 있다.
let count = 1;
const timeoutId = setInterval(() => {
  console.log(count);
  if (count++ === 5) clearInterval(timeoutId);
}, 3000);
//1 2 3 4 5 : 3초에 하나씩 실행
