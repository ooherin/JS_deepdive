//정적 메서드 : 무조건 class에서 호출해야함.
class Square {
    static area(width, height){
        return width *  height
    }
}
const square1 = new Square ;
// console.log(square1.area(2,4)); //square1.area is not a function
console.log(Square.area(2,4)); //8

//프로토타입 메서드 : 인스턴스에서 사용이 가능하다.
class Square2{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        console.log(this.width *this.height);
    }
}
const square2 = new Square2(2,3);
square2.area(); //6

//extends 키워드 (부모class를 상속받아 자식class를 만듬)
//부모 클래스
class Base0{}

//자식 클래스
class Derived0 extends Base0{};

//생성자 함수를 extends로 상속받을 수 있다.
function Base(a){
    this.a = a;
}
class Derived extends Base {}
const derived = new Derived(1);
console.log(derived);

//동적으로 생성자 함수를 상속받는 것도 가능하다.
function Base1() {}
class Base2 {}
let condition = true;
//condition의 상태에 따라 base1이나 base2를 상속받는다.
class Derived2 extends (condition? Base1 : Base2){};
//instanceof
console.log(Derived2 instanceof Base1); //true

//super
//1. 수퍼클래스의 constructor를 호출한다.
//2. 수퍼클래스의 메서드를 호출할수 있다.

class Base3 {
    constructor(a,b){
        this.a = a ;
        this.b = b;
    }
}
class Derived3 extends Base3{
    constructor(a,b,c){//상속받을 인자 포함 모든 인자를 넣는다.
        super(a,b);
        this.c =c;
    }
}
const derived3 = new Derived3(1,2,3);
console.log(derived3);

//3. 자식클래스에서 constructor가 들어가면 반드시 super를 호출해야 한다.
//4. 자식클래스의 super를 호출하기전 this를 참조할수 없다.
//5. super는 반드시 자식클래스의 constructor에서만 호출이 가능하다.

//super참조
//메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 참조할 수 있다.
class Base5 {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        return `hi.my name is ${this.name}`
    }
}

class Derived5 extends Base5 {
    sayHi(){
        return `${super.sayHi()}.How are you doing?`
    }
}
const derived5 = new Derived5('rin');
console.log(derived5.sayHi());
//hi.my name is rin.How are you doing?
