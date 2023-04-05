//정규 표현식

const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel)); //false

const target = 'Is this all ther is?';
const regexp = /is/i;
//패턴 : is 
//플래그 : i 대소문자 구별않고 검색한다.
//플래그 : g 문자열 내 모든 문자를 검색한다.
regexp.test(target); //true

//RegExp 생성자 함수를 사용하여 RegExp 객체를 생성할 수도 있다.(ES6)
const regexp2 = new RegExp(/is/i);
regexp2.test(target); //true

//RegExp 메서드
//1. RegExp.exec :인수로 전달받은 문자열에 대해 검색해 매칭 결과를 배열로 반환
//                매칭 결과가 없는 경우 null로 반환
//              g(모든 패턴 검색)플래그 서도 첫 매칭 결과만 반환
const regexp3 = /is/;
regexp3.exec(target);
//[ 'is', index: 5, input: 'Is this all ther is?', groups: undefined ]

//2. RegExp.test : 인수로 전달받은 문자열에 대해 검색해 t/f로 반환
const regexp4= /is/;
regexp4.test(target); //true

//3. String.match : 매칭 결과를 배열로 반환. exec와 다른 점은 모든 결과를배열로 반환
//                  regExp의 메소드들과 달리 찾을 문자열에서 메소드를 사용한다.
const regexp5= /is/;
target.match(regexp5);

//플래그
//1. /i : 대소문자 구별않고 검색
//2. /g : 모든 문자열을 전역 검색(이걸 쓰지 않으면 한 번만 검색함)
//3. /m : 문자열의 행이 바뀌더라도 검색
//플래그 두 개를 묶어서 사용 가능

//패턴
//임의의 문자열 검색 : .사용
// 임의의 3가지 문자열을 검색하고 싶을 때 : ...
const target2 = 'Is this all there is ?';
const regExp6 = /.../g;
console.log('뭐든 3글자, 띄어쓰기 포함' + target2.match(regExp6));
//뭐든 3글자, 띄어쓰기 포함Is ,thi,s a,ll ,the,re ,is 

const target3 = 'A AA B BB Aa Bb AAA';
const regExp7= /A{2,}/g;
console.log(target3.match(regExp7));
//[ 'AA', 'AAA' ]
//A라는 문자가 최소 두개 이상인 문자열 반환

const regExp8 = /A+/g;
console.log(target3.match(regExp8));
//[ 'A', 'AA', 'A', 'AAA' ]
//패턴 A가 최소 한번 이상 반복되는 문자열 => + 사용

const target4 = 'color colour';
const regExp9 = /colou?r/g;
console.log(target4.match(regExp9));
//[ 'color', 'colour' ]

//대소문자를 구별않고 알파벳 검색하는 법(1개 이상 : +)
const regExp10 = /[A-Za-z]+/g;
console.log(target3.match(regExp10));
//  ['B',   'BB',
// 'Aa',  'Bb',
// 'AAA'
// ]

// /d는 숫자를 의미한다
// /d = [0-9]
// /D는 숫자가 아닌 문자를 의미한다(알파벳 대문자는 소문자와 의미가 반대)

// /w는 알파벳,숫자, 언더스코어를 의미한다.

// ^는 not을 의미한다.
// /[^0-9]+/g = /D
// /[^A-Za-z0-9] = /W

//^ : 시작위치를 의미한다. 단, []안에 ^는 not을 의미한다.
const target5 = 'https://www.naver.com';
const regExp11 = /^https/;
console.log(regExp11.test(target5)); //true
//문자열이 https로 시작하는지를 검사한다.

//$ : 마지막 위치를 의미한다.
const regExp12 = /.com$/;
console.log(regExp12.test(target5)); //true

//자주 쓰이는 정규표현식

//1. 특정단어로 시작하는지 검사
const url = 'https://naver.com';
/^https?:\/\//.test(url); //true
//http:// 또는 https://로 시작하는 지 검사한다. 
// '/'같은 특수문자는 앞에 \를 적어준다

//다음과 동일하다.
/^(http|https):\/\//.test(url)

//2. 특정단어로 끝나는지 검사
const fileName = 'index.html';
/html$/.test(fileName); //true

//3. 숫자로만 이뤄진 문자열인지 검사
const target12 = '12345';
/^\d+$/.test(target12); //true
//+는 앞선 패던이 최소 한번이상 반복되는 것을 의미
//^$는 각각 문자열의 시작, 끝을 의미한다.

//4. 아이디로 사용가능한지 검사
const id = 'abc123';
/^[A-Za-z0-9]{4,10}$/.test(id) //true
//알파벳또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.

//5.메일 주소형식 검사
const email = '555ohr@naver.com';
/^[a-zA-Z0-9+-%._]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


//6. 핸드폰 번호 검사
const phoneNum = '010-1234-5678';
/^\d{3}-\d{3,4}-\d{4}$/.test(phoneNum);

//7.특수문자 사용 검사
const target14 = 'abs#a123';
(/[^0-9a-zA-Z]/gi).test(target); //true
//특수문자 제거 메소드
target.replace(/[^0-9a-zA-Z]/gi,'');





