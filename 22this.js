// 메서드는 자신이 속한 객체의 상태를 참조하고 변경할 수 있어야 한다. 먼저 자신이 속한 객체를 가리키는
// 식별자를 참조할 수 있어야 한다. 
// 인스턴스를 생성(메서드가 참조할 객체)를 만들기 위해서는 생성자 함수가 
// 먼저 존재해야 하는데, 이때 (나중에 생성될)인스턴스를 참조하는 식별자로 this를 쓴다.

// this는 자신이 속한 객체나 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다.
// this가 가리키는 값은 '함수 호출 방식'에 의해 동적으로 결정된다. 

//반면 함수의 상위 스코프를 결정하는 렉시컬 스코프는 함수 객체가 생성되는 시점에 상위 스코프가 결정된다.
//this는 이와 반대로 호출시점에 바인딩이 결정된다.

// this가 가리키는 대상.
// 1. 메소드에서 쓰면 메소드를 포함하는 객체
const person = {
    name : 'lee',
    getName(){
        console.log(this.name); //this는 person
    }
}
person.getName() //메소드를 호출한 객체를 가리킴

// 2.constructor안에서 쓰면 constructor로 생성되는 새로운 객체
//생성자 함수 예시
function Person(name){
    this.name = name;
    console.log(this); //Person{name : 'lee' }
}
const me = new Person('Lee');
// 3.eventListner안에서 쓰면 event.currentTarget(이벤트가 현재 동작하는 곳)

// 4. 콜백함수 등 일반함수에서는 window
function square(number){
    console.log(this); //window
    return number * number;
}
square(2);

//일반함수에서 this는 전역 객체가 바인딩 된다. 이는 함수안의 함수인 중첩함수에서도 마찬가지이다.
//strict mode를 작동시키면 window대신 undefined가 바인딩된다.

//메서드 내에서 정의한 중첩 함수도 일반함수로 호출되면 중첩 함수 내부 this에는 window가 바인딩된다.
var value = 1;
const obj1 = {
    value : 100,
        // 메소드에서 호출시 그 포함 객체
    foo(){
        console.log("foo's this : ", this ); // {value : 100, foo : f}; :
    // 메서드 내에서 정의한 중첩함수(전역 객체 바인딩)
    function bar(){
        console.log("bar's this : ", this); //window
        }
    }
}

//콜백함수또한 일반 함수로 호출시 전역 객체 바인딩.
var value = 1;
const obj2 = {
    value : 100,
        // 메소드에서 호출시 그 포함 객체
    foo(){
        console.log("foo's this : ", this ); // {value : 100, foo : f}; :
    // 메서드 내에서 정의한 중첩함수(전역 객체 바인딩)
    setTimeout(function(){ 
        console.log('callback this: ',this)},1000) //window. 콜백함수이나 일반함수로 호출
    }
}

//심화 : 메서드 내부의 중첩함수나 콜백함수의 this바인딩을 메서드의 this바인딩과 일치시키는 법
//(1) that할당
var value = 1;
const obj3 = {
    value :100,
    foo(){
        const that = this;
        setTimeout(function(){
            console.log(that.value)},100);
        }
}

//(2)화살표 함수 사용 : 화살표 함수에서는 상위의 this
var value = 1;
const obj4 = {
    value : 100,
    foo(){
        setTimeout(()=> console.log(this.value),100);
                                                                                                                  
    }
}

//(3)apply/call/bind사용
function update(birthYear, job){
    this.birthYear = birthYear;
    this.job = job;
}

//call사용 : 인수를 ,로 전달
const mike = {name : 'Mike'};
update.call(mike,2000,'singer');
console.log(mike);

//apply사용 : 인수를 []안에 전달
const jane = {name : 'Jane'};
update.apply(jane, [1999, 'artist']);
console.log(jane);

//arguments객체는 배열이 아니기 떄문에 Array.prototype.slice를 사용할 수 없으나
//call,apply를 활용하면 가능하다.
function convertArgstoArr(){ //arguments를 배열로 바꾸는 함수
    const arr = Array.prototype.slice.call(arguments) //call사용
    return arr;
}
convertArgstoArr(1,2,3); //[1,2,3];

//bind사용
//bind는 call,apply와 달리 함수를 호출하지는 않음 .다만 첫째 전달한 값으로 this바인딩이
//교체된 함수를 새롭게 생성하여 반환함
const jin = {name : 'jin'};
function update(birthYear,job){
    this.birthYear = birthYear;
    this.job = job;
}
const updateJin = update.bind(jin);
//update라는 함수를 jin이라는 객체에 바인딩함.
//this는 jin이 됨

updateJin(1999,'singer');
//바인딩된 함수를 실행하여 jin이라는 함수를 업데이트하였음.

//bind메서드의 또다른 활용법
//메서드의 this와 메서드 내부의 중첩함수, 콜백함수의 this를 일치시켜야 할떄
//참고로 메서드내의 중첩함수와 콜백함수의 this는 window를 가리킨다.
const Person = {
    name : 'lee',
    foo(callback){
        setTimeout(callback.bind(this),1000); //this바인딩
    }
};
Person.foo(function(){
    console.log(`my name is ${this.name}`);
}); //일반함수로 호출된 콜백함수내부의 this는 window이다. Person을 가리키게 하려면
//bind를 써야 함.

//5. Function.prototype.call/apply/bind 메서드에 의한 간접 호출
const foo = function(){
    console.dir(this);
}
const bar = {name : 'bar'};
foo.call(bar); //bar
foo.apply(bar); //bar
foo.bind(bar)(); //bar




