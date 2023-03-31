// ES6 이전의 함수는 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
// 호출할수 있는 => callable
// 생성자함수로 호출 => constructor

// ES6에서는 함수를 3가지 종류로 구분하였다
// 1. 일반함수 : constructor , prototype, arguments
// 2. 메서드 : super, arguments
// 3. 화살표함수 :  x 

// ES6에서 메서드는 축약표현으로 정의한 함수만을 의미하며 non-constructor이다.
// 또힌 자신을 바인딩한 객체를 가리키는 내부슬롯 [[HomeObject]]을 갖기 때문에, 
// super키워드를 사용할 수 있다. (부모클래스의 메서드를 참조 가능)
const base = {
    name : 'Lee',
    sayHi(){   
        // ==> ES6의 메서드이므로 자식은 super키워드를 통해 부모의 메소드를 사용할 수 있다.
        return `Hi. ${this.name}`;
    }
};
const derived = {
    __proto__ : base,
    super(){
        return `${super.sayHi()}`
    }
}
console.log(derived.sayHi()); //Hi.Lee!


//this
//콜백함수를 일반함수로 호출하는 메서드를 사용하게 되면, 콜백함수 내의 this는 전역객체(window)
//를 가리키기 때문에, 에러가 생긴다.
//콜백함수의 this와 외부함수의 this가 다른 객체를 가리키기 때문에 생기는 문제이다.

//<<<<화살표 함수>>>>>
//화살표함수는 lexical this, 상위 스코프의 this를 그래로 참조한다
//(고유의 this 가 없다)따라서 콜백함수에서 화살표 함수를 이용하면
//this 불일치 문제 해결 가능
class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }
    add(arr){
        return arr.map(item => this.prefix + item);
    }
}
const prefixer = new Prefixer('samsung');
console.log(prefixer.add(['phone','TV','airconditioner']));

//중첩함수 foo의 상위 스코프는 즉시실행함수다.
//따라서 화살표 함수 foo의 this는 상위 스코프인 즉시실행함수의 this를 가리킨다.
(function (){
    const foo = () => console.log(this);
    foo();
}).call({a:1});  //{a:1}

(function (){
    const bar = () => () =>  console.log(this);
    bar()();
}).call({a:1});  //{a:1}
//화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 화살표함수를 
//제외한 상위 스코프의 this를 그대로 상속받는다.
//여기서는 즉시실행함수를 가리킨다. 

//<메서드가 화살표함수일 시 this문제>
//여기서 메서드의 this는 counter가 아닌 전역 객체를 가리킨다.
//화살표함수의 this는 자신만의 바인딩을 가지지 않으므로
//상위 스코프인 전역객체를 가리키게 된다. (window)
//bad
const counter = {
    num: 1,
    increase : () => ++this.num
};
console.log(counter.increase()); //NaN
//window에는 num이라는 객체가 없으므로 NaN이 반환된다

//이러한 문제때문에 메서드를 정의할 때는 화살표함수가 아닌 메서드 축약 표현으로 정의해야한다.
//good
const person = {
    name : 'lee',
    sayHi(){
        console.log(`hi. my name is ${this.name}`);
    }
}
person.sayHi();//hi. my name is lee

//<프로토타입 객체의 프로퍼티를 할당할때 화살표함수사용시 문재>
//메서드를 화살표함수로 정의한 것과 동일한 문제가 일어나므로 
//화살표함수 사용을 지양해야 한다. 

//good
function Person1(name){
    this.name = name;
}
Person1.prototype.sayHi = function(){
    console.log(`my name is ${this.name}`)
}
const person1 = new Person1('Kim');
person1.sayHi();//my name is Kim

//요약하자면 보통 메서드나, 프로토타입 프로퍼티(메서드)를 정의하면 this는 자신을 호출한 객체인
//.앞의 객체(인스턴스)를 반환하나,
//화살표함수는 이 규칙이 통하지 않는다. 그러니 메서드 정의시 화살표 함수 사용은 금물이다. 

//다음과 같이 클래스 필드 정의 제안을 사용할 수도 있다.
class Person2 {
    name = 'lee';
    sayHi = () => console.log(`Hi.{this.name}`)
    //sayHi : () => console.log(`Hi.{this.name}`)   (x)
}
//이 경우 sayHi앞에 this가 붙는 효과가 있다. this는 인스턴스를 가리키므로 잘 동작한다.,
//그래도 가장 좋은 건 축약 메서드이다. 


//화살표 함수는 super를 가지지 않고 this처럼 ㅅ강위 스코프의 super를 참조하나,
//클래스 필드정의를 사용하면 잘 작동한다.
class Base5{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hi ${this.name}`)
    }
}
class Derived5 extends Base5 {
    sayHi = () => `${super.sayHi()}`
}
const derived5 = new Derived5('jin');
derived5.sayHi(); //Hi jin

//화살표함수의 arguments 또한 상위 스코프를 참조한다. 
(function(){
    const foo = () => console.log(arguments);
    foo(3,4);
}(1,2));//[Arguments] { '0': 1, '1': 2 }
//화살표함수의 arguments는 foo가 아니라 상위 스코프인 즉시실행함수의 arguments를 참조

//Rest 파라미터 : 함수에 전달된 인수들의 목록을 배열로 전달받는다.
//[...나머지 매개변수]
//반드시 마지막에 들어가야 한다.
//앞에다가 매개변수를 지정하면 지정된 인수들을 제외하고 배열에 집어넣는다.
function foo (param,...rest){
    console.log(param);
    console.log(rest)
}
foo(1,2,3,4,5); //1 [2,3,4,5]

//rest와 arguments의 차이점 
//arguments는 함수의(인수자리)에 바로 들어가지 않으며,호출할때 쓰인다.
 //배열이 아닌 유사배열이다.
function sum(){
    console.log(arguments)
}
sum(1,2,3);//[Arguments] { '0': 1, '1': 2, '2': 3 }

//rest파라미터를 사용하면 함수의 인자 목록을 바로 배열로 받을 수 있다는 장점이 있다. 
function sum(...rest){
 let sum = 0 ;
 return rest.reduce((acc,cur)=> acc + cur, 0);
}
console.log(sum(1,2,3,4,5)); //15

//매개변수 기본값 사용하는 법
//인자에다가 =로 기본값을 지정
function sum(x =1 ,y =2){
    return x + y
}
console.log(sum(5)); //7







