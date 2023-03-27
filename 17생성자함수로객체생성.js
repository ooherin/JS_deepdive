//object 생성자 함수: 보통 첫글자를 대문자로 만든다. 
const person = new Object(); //빈 객체가 생성된다. 보통은 리터럴 방식이 더 유용하다.
person.name = 'lee';
person.sayHello = function(){
  console.log(`Hi.my name is ${this.name}`);
}
person.sayHello();

//생성자함수는 new연산자와 함께 호출하여 객체를 생성한다. 생성자 함수에 의해 형성된 객체를 인스턴스라고 한다. 

//생성자 함수로 객체 생성시 장점 
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
      return 2 * this.radius;
    }
  }
  const circle1 = new Circle(3);
  const circle2 = new Circle(5);
  
  console.log(circle1.getDiameter());//6
  console.log(circle2.radius);//5
  //생성자 함수를 마치 객체(인스턴스) 생성을 위한 템플릿(클래스)처럼 생성자 함수를 사용하여
  //프로퍼티 구조가 동일한 객체를 여러개 간편하게 생성할 수 있다.
  //* 생성자 함수의 의의: 재사용할 수 있는 객체 생성 코드를 구현하는 것 */
_____________________________________________________________________________
  //this : 함수 호출 방식에 따라 동적으로 결정된다.

//   1. 일반 함수로서 호출 : 전역 객체
  function foo(){
    console.log(this) //window
  }

  // 2. 메서드로서 호출 : 메서드를 호출한 객체. 마침표 앞의 객체를 의미
  const obj = {
    name : 'rin',
    sayhello : function(){
   console.log(`hello,${this.name}!`)
  }};
  //sayhello라는 메서드를 호출한  obj가 this가 된다. 
  obj.sayhello();
  //hello, rin!

  //3. 생성자 함수로서의 호출 : 인스턴스
  function Flower(name,color){
    this.name = name;
    this.color = color;
  }
  const lilly = new Flower('lilly','white');
  console.log(lilly);
    

  //생성자함수가 만들어지면 생기는 일(this)

  function User(name) {
    // this = {};  (빈 객체가 암시적으로 만들어짐)
  
    // 새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (this가 암시적으로 반환됨)
  }
  
  //new로 인스턴스 생성
  let user= new User("보라"); 

  //인스턴스 생성시 밑과 동일하게 동작함.
  let user1 = {
    name: "보라",
    isAdmin: false
  };
 _____________________________________________________________________________
 
 //new연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
 //new연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

 function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
      return 2 * this.radius;
    }
  }
  
  const circle3 = Circle(10); //new를 적지 않았으므로 생성자 함수로 동작하지 않는다. 
  console.log(circle3);     //undefined

  //new연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 다음 과정을 거쳐 암묵적으로 인스턴스를
  //생성하고 인스턴스를 초기화한후 암묵적으로 인스턴스를 반환한다.

  //1. 인스턴스 생성과 this 바인딩
  //: 암묵적으로 빈 객체가 생성된다(초기 인스턴스)
  //: 인스턴스가 this에 바인딩(식별자와 값이 연결) 된다.
  //: 생성자 함수 내부의 this가 인스턴스를 가리키는 이유이다.

//생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환해서는 안된다. 
//생성자 함수 내부에서 return을 반드시 생략해야 한다. 

//함수도 객체이다. 그러나 함수는 [[Call]],[[Construct]]와 같은 메서드를 추가로 가지고 있어 호출이 가능
//함수가 일반함수로서 호출되면 [[Call]], 생성자함수로서 호출되면 [[Construct]]가 호출된다. 
function foo(){}
foo() //일반함수로의 호출 [[Call]]이 호출된다.
new foo() //생성자 함수로의 호출 [[Construct]]가 호출된다.

//모든 함수는 [[Call]]이 있는 callable(호출가능)이지만, [[Construct]]를 가진 constructor는 아니다. 

//1, constructor : 함수 선언문, 함수 표현식, 클래스(함수이다)
//2. non-constructor : 화살표함수, 메서드(function으로 정의한 메서드가 아닌 메서드 축약 표현만 메서드로 인정)

//(1)메서드인데 constructor인 경우
const bar = {
    x: function(){}
};  //constructor에 해당한다
new bar.x(); //x{} //constructor이므로 빈 객체가 생성된다.

//(2)메서드인데 non-constructor인 경우
const bar2 = {
    x() {}
}   
new bar2.x(); //TypeError: obj.x is not a constructor

_____________________________________________________________________________

//일반함수와 생성자 함수간 차이는 없다. new연산자와 함께 함수를 호출하면 생성자 함수로 동작한다. 
//함수가 constructor인 함수선언문, 함수표현식, 클래스 일때만 해당된다. 

//생성자 함수와 일반함수 구별법
//생성자 함수 : this를 사용해 프로퍼티를 정의하고, 반환문이 없다.
//일반 함수 :this를 사용하지 않으며 return을 통한 반환문이 있다. 
//일반함수는 단순히 값을 계산하거나 다른 함수를 호출하는 등의 역할을 한다.

//1.생성자 함수로 정의하지 않은 일반 함수(대문자시작x, this없음, return사용해 반환문 있음)
function add(x,y){
    return x+y;
}
let inst = new add();

console.log(inst); //{} : 빈객체가 반환된다.함수가 객체를 반환하지 않아서(inst의 인수가 없다?)


//2. 객체를 반환하는 일반함수(return있고 this없어서 생성자 함수아님.그러나 new를 사용해 생성자 함수로 동작)
function creatUser(name ,role){
    return {name , role};
}
inst = new creatUser('lee', 'manager');
console.log(inst); //{name : 'lee', role : 'manager'}'; 함수가 생성한 객체를 반환한다. 


//3. 반대로 new생성자 없이 생성자 함수를 호출하면 일반함수로 호출된다. 
//new = [[Construct]]호출임을 명심하자.

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}
//new 연산자 없이 생성자 함수를 호출 : 일반함수로 호출됨([[Construct]]가 아닌 [[Callable]]이 호출됨)
const circle = Circle(4);
console.log(circle); //undefined;

//undefined가 나오는 이유. new키워드를 쓰지 않고 'Circle'생성자 함수를 호출하면 
//생성자 함수 내부의 this는 전역객체인 window를 가리키고, this.radius와 this.getDiameter()
//는 모두 전역 객체에 새로운 프로퍼티를 추가하게 되며, 이때 생성자함수는 아무런 값을 반환하지 않는다.

//반면 new키워드를 쓰면 'this'는 생성된 인스턴스(객체)를 참조하게 된다. this.radius. this.getDiameter()
//또한 생성된 인스턴스 객체에 프로퍼티를 추가하게 되며, 이때는 생성된 객체가 반환된다.
// 이때는 인수값을 집어넣어 나온 결과값이 반환된다. 


//new.target
function Circle(radius){
    if(!new.target){
        return new Circle(radius);
        //new를 쓰지 않아도 생성자 함수를 재귀 호출해 생성된 인스턴스를 반환한다. 
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}







