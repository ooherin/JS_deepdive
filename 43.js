//HTTP의 응답 처리
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.log(error("Error", xhr.status, xhr.statusText));
  }
};

//HTTP 요청 전송 순서
//0. XMLHttpRequest로 객체 생성
const xhr = new XMLHttpRequest();
//1. XMLHttpRequest.prototype.open 메서드로 HTTP요청을 초기화
xhr.open("GET", "/user");
//2. 필요에 따라 setRequestHeader 메서드로 특정 HTTP요청의 헤더 값을 설정
xhr.setRequestHeader("content-type", "application/json");
//3. XMLRequest.send로 HTTP요청을 전송함
xhr.send();
