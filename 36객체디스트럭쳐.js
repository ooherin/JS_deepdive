//p.639
//객체 디스트럭쳐 할당
//좌 : 변수 = 우 : 이터러블
//디스트럭처링 할당 (구조 분해 할당)은 구조화된 배열과 같은 이터러블 또는 객체를 
//destructuring 하여 1개이상 변수에 개별적으로 할당하는 것을 말한다.

//배열 디스트럭쳐 할당 : 이터러블만 가능
const arr = [1,2,3];
const [first, second, third] =arr; 
console.log(first, second, third); //1 2 3

//배열 디스트럭쳐 할당을 위해서는 왼쪽에 변수를 배열 리터럴
//형태로 선언한다.
//배열 디스트럭쳐 할당의 기준은 배열의 인덱스이다.
const [c,d] = 1;
console.log(c,d) //  1 undefined

//좌변(변수)에 기본값 설정도 가능하다.
const [e,f=10,g=5] = [1,2,3];
console.log(e,f,g); //1,2,3

//배열 디스트럭쳐 할당에 rest를 쓸 수도 있다.
//rest파라미터 : 마지막 요소들을 배열로 반환한다.
const [x,...y] = [1,2,3];
console.log(x,y); //1,[2,3]


//객체 디스트럭쳐 할당
const user = { firstName  : 'taylor' , lastName : 'swift'};
// const {first, last} = user; : 변수명과 프로퍼티키가 일치하지 않으므로
//디스트럭쳐 할당이 되지 않는다.

//축약표현으로 할당하려면 같은 이름으로 할당해야 한다.
//프로퍼티 키로 디스트럭쳐 할당이 이루어진다. 순서는 의미없다.

//다음은 축약표현으로 선언한 것이다.
const { firstName, lastName } = user;
console.log(firstName , lastName);

//다른 이름으로 할당하려면 : 오른쪽에 새로운 변수명을 적는다.
const { firstName : one, lastName : two } = user;
console.log(one, two);//taylor swift

//기본값을 할당할 수도 있다.
//왼쪽에 기본값 할당은 '='로, 오른쪽에 실제 값 할당은 :로 한다.
//왼쪽에 변수명 바꾸는 것은 :로 한다.
const {FirstName = 'Ariana', LastName} = {LastName : 'grande'};
console.log(FirstName,LastName); //Ariana grande

const User  = {id : 'yujin', pw : 1532};
const {ID = 'myName', PW = 1234} = User;
console.log(id,pw); //yujin 1532

//객체 디스트럭처 할당은 원하는 프로퍼티만  추출하여 변수에 할당할 때 유용하다
//객체에 프로퍼티 키와 같은 변수를 만들고 추출하면, 프로퍼티 값이 나온다.
const todo = {id : 1, content : 'study', completed : true};
const {content} = todo; //좌변에 원하는 프로퍼티 키만 입력한다.
                        //우변에는 객체 전체를 할당한다.
console.log(content); //content라는 새로운 변수 생성, 변수에는 study라는 값이 들어가 있음.

//printTodo의 파라미터에 원하는 프로퍼티키를 집어넣고 
//함수를 호출할 때 ()안에 객체를 집어넣는다.
function printTodo({content,completed}){
    console.log(`할일 ${content}은 ${completed? '완료' : '미완료'}상태입니다!`);
}
printTodo({id : 1, content : 'exercise', completed : false});
//할일 exercise은 미완료상태입니다!
printTodo({id : 2, content : '청소', completed : true});
//할일 청소은 완료상태입니다!

//중첩객체인 경우
//할당시 포함객체와 안의 프로퍼티 키를 {}로 적되
//실 사용시 변수이름은 안의 프로퍼티 키가 된다. 
const user1 = {
    name : 'Lee',
    address : {
        country : 'France',
        city : 'Paris'
    }
};
//좌변 변수명은 중첩관계가 똑같이 들어가야 한다.
const {address : {city}} = user1;
console.log(city); //Paris

//Rest프로퍼티를 사용할 수 있다.
const {a,...rest} = {x:1, y: 2, z :3};
console.log(a,rest) // 1 {y:2,z:3};