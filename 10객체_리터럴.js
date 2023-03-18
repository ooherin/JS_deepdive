let person = {
    name : 'lee',
    sayHello : function(){
        console.log(`Hello! my name is ${this.name}`);
    }
};
console.log(typeof person);//object

//프로퍼티 키를 동적으로 생성하는 법
let obj = {};
let key = 'hello';
obj[key] = 'world';
console.log(obj);//{ hello: 'world' }

//프로퍼티 키를 숫자로 생성(문자열로 자동 변환)
let foo = {
    0: 1,
    1: 2,
    2: 3,
}
console.log(foo);//{ '0': 1, '1': 2, '2': 3 }

//기존의 프로퍼티 키를 덮어쓰는 경우 : 에러가 발생하지 않는다.
let obj1 = {
    name : 'jenny',
    name : 'rina',
}
console.log(obj1);//{ name: 'rina' }

//메서드 : 프로퍼티에 들어간 함수의 이름
let circle = {
    radius : 5,
    getDiameter : function(){
        return 2 * this.radius;
    }
}
console.log(circle.getDiameter()); //10

//프로퍼티 값 갱신
let person1 = { 
    age : 13,
}
person1.age = 15;
console.log(person1.age); //15

//프로퍼티 동적 생성
person1.name = 'rin';
console.log(person1); //{ age: 15, name: 'rin' }

//프로퍼티 키 삭제
delete person1.age;
console.log(person1.age); //undefined

//es6 프로퍼티 축약 표현(변수이름과 프로퍼티 키가 동일할 때 생략 가능)
let x = 1; let y =2;
const obj3 = {x, y};
console.log(obj3); //{ x: 1, y: 2 }

//es6 계산된 프로퍼티 이름
const id = 'yellow';
let i = 0;
const obj4 = { 
    [`${id}-${++i}`] : i,
    [`${id}-${++i}`] : i,
    [`${id}-${++i}`] : i,
}
console.log(obj4);//{ 'yellow-1': 1, 'yellow-2': 2, 'yellow-3': 3 }

//es6 function키워드 생략해 메서드 만들수 있음
const obj5 = {
    name : 'rin',
    sayHello(){
        console.log(`hello! my name is ${this.name}`);
    }
}
obj5.sayHello(); //hello! my name is rin
sayHello(); //






