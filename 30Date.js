//Date는 날짜와 시간을 위한 메서드를 제공하는빌트인 객체이자 생성자 함수이다. 

//Date함수를 인수 없이 new연산자와 함께 호출하면 현재 날자와 시간을 가지는 Date객체를 반환한다.
console.log(new Date()); //2023-03-30T00:12:24.089Z

//new연산자 없이 호출하면 Date객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열 반환
console.log(Date()); //Thu Mar 30 2023 09:12:24 GMT+0900 (Korean Standard Time)

//new Date(dateString)
//Date생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면 Date객체를 반환한다.
//전달한 날짜는 Date.parse형식에 의해 해석 가능한 형식이여야

const date1 = new Date('May 26, 2020 10:00:00');
const date2 = new Date('2023/03/30/10:00:00');
console.log(date1);//2020-05-26T01:00:00.000Z
console.log(date2);//2023-03-30T01:00:00.000Z

//new Date(년,월,[일,시,분,초,일리초]);
const date3 = new Date(2023,3,30,10,10,30,30);
console.log(date3); //2023-04-30T01:10:30.030Z

//Date 메서드 
//Date.now : 1970년 1/1을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환(거의 쓸일 없음)
const now = Date.now();
console.log(now);

//Date.getFullYear /getMonth / getDate
//Date.setFullYeat / setMonth / setDate
//메서드이기에 ()을 붙여야 실행된다.
const today = new Date();
today.setFullYear(2000,10,16);
console.log(today.getFullYear()); //2000
console.log(today.getMonth()); //10
console.log(today.getDate());//16

//Date.getDay:요일반환 메소드
//일요일은 0 토요일은 6을 가리킨다.
console.log(today.getDay()); //4(목요일)

//Date.getHours/ getMinutes/ getSeconds
//Date.setHours / setMinutes/ setSeconds
const newDate = new Date('2023/3/30/9:30:30');
console.log(newDate.getHours()); //9
console.log(newDate.getMinutes()); //30
console.log(newDate.getSeconds()); //30

//시계 예제
(function printNow(){
    const day = new Date();
    const dayNames= [
        '(일)',
        '(월)',
        '(화)',
        '(수)',
        '(목)',
        '(금)',
        '(토)',
    ];
    const 요일  = dayNames[today.getDay()];
    const year = day.getYear() + 1900;  
    const month = day.getMonth() + 1 ;
    const date = day.getDate();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    const ampm = hour > 12 ? 'AM' : 'PM';
    hour  %= 12;
    hour = hour || 12;
    minute = minute < 10 ? minute + '0' : minute;
    second = second < 10 ? second + '0' : second ;
    console.log(`${year}년 ${month}월 ${date}일 ${요일} ${hour}시 ${minute}분 ${second}초 ${ampm}`)
}());
//2023년 3월 30일 (목) 9시 41분 31초 PM


