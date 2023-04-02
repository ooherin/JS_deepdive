// 배열은 인덱스와 length 프로퍼티를 갖기 때문에  for문 사용시 요소에 하나씩 접근가능
//객체는 이 속성이 없으며 배열은 반복문으로 요소를 순회하기에 적합한 자료구조이다.
//배열의 타입은 object

//자바스크립트는 희소배열, 배열의 요소가 연속적으로 이어져 있지 않을 수 있다.
//희소배열을 만들지 않도록 주의
const sparse = [,2,,4]
//배열은 객체보다 요소접근시 2배더 빠르게 변함.

//length는 마지막index에 1을 더한 값이며,
//배열애 요소를 추가,삭제시 변경됨
const arr = [1,2,3];
arr.pop();
console.log(arr.length); //2

//배열의 길이를 일부로 줄이면 값이 삭제되고, 일부로 늘리면 length는 늘어나나 값이 없는 인덱스가 된다ㅣ.
//이경우 실제 배열에는 영향을 주지 못한다.

//Array생성자 함수 : ()안에 들어가는 값은 요소가 아니라 length이다. (하나일경우) => Array.of사용시 배열생성
const arr1 = new Array(10);
console.log(arr1);//[ <10 empty items> ]
//희소배열이 생성되었다.length가 있다고 해서 실제 배열요소가 생성된건 아님

//인자가 2개이상일 경우 그걸 요소로 하는 배열 생성
const arr2 = new Array(1,2,3);
console.log(arr2);//[ 1, 2, 3 ]

//Array.from
//유사배열 객체 이터러블 객체를 인수로 전달받아 배열로 반환.
console.log(Array.from('hello'));//[ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from({length : 3},(_,index)=> index));
//_는 매개변수를 무시할때 사용. 두번째 인수인 index를 값으로 하는 요소를 생성

//배열 요소 참조
//배열 요소는 [인덱스] 로 참조 : 인덱스는 객체의 프로퍼티 키같은 역할을 한다.(*)
//존재하지 않으면 undefined

//배열 또한 객체처럼 프로퍼티를 생성할 수 있다. 인덱스값을 정수로 주지않았을 때 형성되며,
//length에 영향을 주지 않는다
const arr3 = [];
arr3[1] = 1;
arr3['2'] = 2;
arr3['three'] = 3;
arr3.four = 4;
arr3[1.1] = 5;
console.log(arr3);//[ <1 empty item>, 1, 2, three: 3, four: 4, '1.1': 5 ]
//인덱스 0이 빈 희소배열임

//배열 삭제메서드 
//splice : 중간 요소 삭제 메서드
const arr4 = [1,2,3];
arr4.splice(1,1);
console.log(arr4); //[1,3]

//1. push (맨 뒤에 요소 추가) => 원본 변경 메서드
const arr5 = [1,2];
console.log(arr5.push(3),arr5); //3, [1,2,3]
//원본 배열을 호출해야 더한 배열이 나온다.

//2. Array.isarray
console.log(Array.isArray({0:1, length : 1})); //false

//3.Array.indexOf(false면 -1반환, 있으면 첫 index반환)
console.log(arr5.indexOf(100)); //-1

//indexOf를 사용해 없는 id를 추가하는 문제
const idBox = [];
let id = '새아이디'
if(idBox.indexOf(id) === -1){
    idBox.push(id);
    console.log('아이디가 생성되었습니다')
}else{
    console.log('다른 아이디를 입력하세요')
}

//4.Array.includes
if (!idBox.includes){
    idBox.push(id);
    console.log('아이디가 생성되었습니다')
}else{
    console.log('다른 아이디를 입력하세요')
}
//5.Array.push : 마지막에 추가=> 원본 변경 메서드
//6.Array.pop : 마지막요소 제거 => 원본 변경메서드
//push와 pop메서드 사용시 스택 구현 가능
//스택은 접시 위에 올린 팬케이크를 층층이 쌓고 위부터 먹는 것(LIFO) 형식
//스택 함수 구현
const Stack = (function(){
    function Stack(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array`)
            //에러처리 : 배열아니면 경고 리턴
        }
        this.array = array;
    }
    
    Stack.prototype = {
        //생성자함수에 의한 프로토타입의 교체
        constructor : Stack,
        push(value){
            return this.array.push(value)
        },
        pop(){
            return this.array.pop();
        },
        //스택의 복사본 배열을 반환
        entries(){
            return {...this.array};
        }
    };
    return Stack;
}());

const stack = new Stack([1,2]);
stack.push(10);
console.log(stack); //Stack { array: [ 1, 2, 10 ] }
 
//~513
//unshift
//맨 앞에 요를 추가하고 변경된 length를 반환한다.원본배열을 변경한다.
let arr6 = [1,2];
arr6.unshift(0);
console.log(arr6); //[ 0, 1, 2 ]

//shift
//맨 앞에 요소를 삭제하고 삭제된 요소를 반환한다. 원본배열을 변경한다.
let result = arr6.shift();
console.log(result); //0
console.log(arr6); //[1,2]

//shift와 push를 사용하면 FIFO인 큐를 쉽게 구현할 수 있다.
const Queue = (function(){
    function Queue(array = []){
        if(!Array.isArray(array)){
            throw new TypeError('array가 아닙니다!')
        }
        this.array = array;
    }
    Queue.prototype = {
        constructor : Queue,
        enqueue(value){
            return this.array.push(value);
        },
        dequeue(value){
            return this.array.shift();
        },
        entries(value){
            return [...this.array];
        }
    };
    return Queue;
}());

const queue = new Queue([1,2]);
console.log(queue.enqueue(3));
console.log(queue.entries());//[ 1, 2, 3 ]
console.log(queue.dequeue());
console.log(queue.entries()); //[2,3]
//3은 가장 뒤에 들어가고, 1은 가장 먼저 빠진다
 
//concat : 인수값을 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
const arr7 = [1,2,3];
const arr8 = [4,5,6];
console.log(arr7.concat(arr8)); //[1,2,3,4,5,6]
console.log(arr7); //[1,2,3]
//원본배열은 변경하지 않는다.

//push(맨뒤에 추가), unshift(맨 앞에 추가) 는 concat로 대체할 수 있다.
//다만 push,unshift는 원본 배열을 변경하므로 원본배열을 변수에 저장하거나, 복사본을 만들어야 한다.
//push,unshift는 인수로 정달받은 배열을 그대로 추가한다.(배열일 경우 배열 그대로 추가됨)
//concat의 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.

//splice :  중간의 요소를 삭제할때사용한다.(추가도 가능하다.)
const arr9 = [10,20,0,50];
arr9.splice(2,1,30,40);
console.log(arr9); //[ 10, 20, 30, 40, 50 ]
 
//splice에서 인수를 하나만 쓰면 거기부터 뒤까지 다 삭제된다.
const arr10 = [1,2,10,20];
console.log(arr10.splice(2)); //[10,20]

//배열에서 특정 요소 제거하는 법 : 중복요소 처음만 제거
const arr11 = [1,2,3,1,2];
function remove(array,item){
    const index = array.indexOf(item);
    if(index !== -1)
        array.splice(index,1);
        //splice은 index를 인수로 받는다 
        return array;
}
console.log(remove(arr,2));
console.log(remove(arr,10));

//~512
//534~
//forEach메서드는 원본배열을 변경하지 않는다. 하지만 콜백 함수를 통해 원본 배열을 변경할 수 있다.
const numbers = [1,2,3];
numbers.forEach((item,idx,arr)=>{arr[idx]=item * 2});
console.log(numbers); //[2,4,6]

//forEach의 콜백함수에서 this를 메소드 내부의 this와 일치시기려면 두번재 인수로 '사용할 객체'
//를 전달해야 한다.
//또는 화살표 함수를 쓰는 것이 좋다
//화살표 함수 쓰는 예제
class Numberss {
    numberArray = [];
    multiply(arr){
        arr.forEach(item=>this.numberArray.push(item * item));
    }
}
const numberss = new Numberss();
numberss.multiply([2,3,4]);
console.log(numberss.numberArray); //[4,9,16]

//reduce : 요소의 중복 횟수 구하기 (p.544)
const fruits = ['banana','apple','banana','apple','banana'];
const count = fruits.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {} );
console.log(count); //{ banana: 3, apple: 2 }

//reduce: 중첩 배열 평탄화
const values = [1,[2,3],4,[5,6]];
const flatten = values.reduce((acc,cur) => acc.concat(cur),[]);
console.log(flatten);//[ 1, 2, 3, 4, 5, 6 ]
//사실 Array.flat 메서드를 쓰는 것이 더 직관적이다.
const flattenArr = [1,[2,3],4,[5,6]].flat();
//flat([]의 깊이 값, []가 3개 면 2를  써야 한다.)
console.log(flattenArr);

//중복 요소 제거 : set이 효과적
const value = [1,2,3,4,5,4,3,2,1];
//새로운 set을 만들고 분해하여 (...) []에 재할당한다.
const resultSet = [...new Set(value)];
console.log(resultSet); //[ 1, 2, 3, 4, 5 ]


//reduce :객체의 특정 프로퍼티 값응ㄹ 합산하는 경우
const products = [
    {id : 1, price :  100},
    {id : 2, price :  200},
    {id : 3, price :  300},
]
const priceSum = products.reduce((acc,cur)=> acc + cur.price, 0 );
console.log(priceSum); //600
