// ; [[...]]이중 대괄호로 둘러쌓인 이름들이 내부 슬롯과 내부 메소드이다.
// ; 원칙적으로 사용자가 내부 슬롯과 내부 메서드에 접근할 수 있는 방법은 없다.
// ; 일부 ([[prototype]])내부 슬롯의 경우 __proto__를 통해 접근 가능하다.
 

// ; js엔진은 프로퍼티를 생성할 때 프로퍼티 어트리뷰트를 자동 정의한다. 
// ; 1. [[Value]]
// ; 2. [[Writable]]
// ; 3. [[Enumerable]]
// ; 4. [[Configurable]]

let user = {
  get id(){
return `${this.name} ${this.num}`},
  set id(value){
[this.name, this.num] = value.split(" ")}
};
user.id = "james 202";
console.log(user.name); //james
console.log(user.num); //202