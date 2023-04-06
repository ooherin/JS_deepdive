//Map은 키와 값의 쌍으로 이루어진 컬렉션이다.
//객체와 유사하나 다음과 같은 특징이 있다.
//1. 객체는 키로 문자열, 심벌값만 사용이 가능하나, map은 모든 값을 키로 사용가능
//2. 이터러블이다.(for...of, forEach, 디스트럭쳐할당...사용 가능)

//Map생성자 함수는 이터러블을 인수로 전달받아 Map객체를 생성하는데, 
//이때 키와 값의 쌍으로 이루어진 요소로 전달받아야 한다.
const map1=  new Map([['key1', 'value1'],['key2','value2']]);
console.log(map1);
//Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

//1. 요소의 개수 확인 : size
const {size} = map1;
console.log(size); //2

//2. 요소 추가 : set
const map2 = new Map();
map2.set('apple','red');
console.log(map2);//Map(1) { 'apple' => 'red' }

//Map도 일반객체와 마찬가지로 중복된 키를 갖을 수 없다.
//뒤의 값으로 덮어진다.
map2.set('apple','blue');
console.log(map2);//Map(1) { 'apple' => 'blue' }

//Map은 객체와 달리 모든 값을 키로 사용할 수 있다. 
//객체와 가장 큰 차이점
//심지어 객체도 키로 사용가능하다.
const map3 = new Map();
const lee = {name : 'lee'};
map3.set(lee,'student');
console.log(map3)//Map(1) { { name: 'lee' } => 'student' }

//3. 요소취득 : get
const map4 = new Map();
const kim = {name :'lee'};
const oh = {name : 'oh'};
map4
    .set(kim, 'designer')
    .set(oh,'developer');

console.log(map4.get(oh)); //developer

//4. 요소존재 여부 확인 : has
console.log(map4.has(kim)); //true

//5. 요소삭제 : delete
map4.delete(kim);
console.log(map4);//Map(1) { { name: 'oh' } => 'developer' }

//6.요소일괄삭제 : clear
map4.clear();
console.log(map4); //Map(0) {}

//7. 요소 순회 : forEach
const kori = {name :'dog'};
const mari = {name : 'cat'};
const map6 = new Map([[kori,'white'],[mari,'black']]);
map6.forEach(((value,key,map)=>console.log(value,key,map)));
//white 
//{ name: 'dog' } 
//Map(2) { { name: 'dog' } => 'white', { name: 'cat' } => 'black' }
// black 
//{ name: 'cat' } 
//Map(2) { { name: 'dog' } => 'white', { name: 'cat' } => 'black' }

//Map의 메소드
//Map.keys : Map에서 요소키를 값으로 같는이터레이터 반환
//Map.values : Map에서 요소 값을 값으로 같는 이터레이터 반환
//Map.entries : Map에서 요소키와 요소값을 같이 반환
for(const key of map6.keys()){
    console.log(`key : ${key}`);
}
//key : [object Object]
// key : [object Object]
for(const value of map6.values()){
    console.log(`value : ${value}`);
}
// value : white
// value : black
for(const entry of map6.entries()){
    console.log(`entries : ${entry}`)
}
// entries : [object Object],white
// entries : [object Object],black