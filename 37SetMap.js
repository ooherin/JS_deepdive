//set : 중복되지 않은 유일한 값들의 집합
//배열과 유사해 보이지만, 다음과 같은 특징이 있다.
//1. 중복 요소 포함 불가
//2. 요소 순서 의미 없음
//3. 인덱스로 요소 접근 불가
//set은 그냥 여러 과일 들이 들어 있는 '과일 세트'이다.

//set객체의 생성
//set 생성자 함수는 이터러블을 인수로 전달받아 set객체를 생성한다.
const set = new Set([1,2,3,3,2]);
console.log(set);//Set(3)[1,2,3]

const set2 = new Set('hello');
console.log(set2) //Set(4) { 'h', 'e', 'l', 'o' }

//set을 쓰면 배열의중복요소를 쉽게 제거할 수있다
//filter를 쓰는 방법
const uniq = array => array.filter((e,i,arr)=> arr.indexOf(e) === i);
//set을 쓰는 방법
const uniq1 = array => [...new Set(array)];

//요소의 개수 확인 : size
const {size} = new Set([1,2,3,4,5]);
console.log(size); //5

//요소 추가 : add
const set1 = new Set();
set1.add(1,2);
console.log(set1) //1
//add는 한 요소만 추가할수 있다.
set1.add(2);
console.log(set1);//Set(2) { 1, 2 }
//중복된 요소는 추가되지 않고 무시된다.
//NaN은 서로 같지 않으나, set에서는 같다고 인식한다

//set은 js의 모든 값을 요소로 저장할 수 있다.
const set3 = new Set();
set3
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(()=>{})


//요소 존재 여부 확인 :has
console.log(set3.has(2)); //false

//요소 삭제 : delete
console.log(set3.delete(1)); //true
//delete는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.

//요소 일괄 삭제 : clear
set3.clear();
console.log(set3);//Set(0) {}

//요소 순회 : set은 이터러블이므로 forEach를 나타낸다
const set5 = new Set([1,2,3]);
// set5.forEach((v,v,set));
//set의 forEach 의 인수는  요소값,요소값, 객체 자체이다
//forEach의 두번째 인수는 원래 index이나, set은 인덱스가 없다.

//set은 이터러블이므로 디스트럭쳐 문법을 사용할 수 있다.
Symbol.iterator in set5 //true
for(const value of set5){
    console.log(value); //1 2 3
}

//set객체는 스프레드 문법의 대상이 될 수 있다
console.log(...set5); // 1 2 3
//set객체는 디스트럭쳐 할당의 대상이 될 수 있다.
const [a,...rest] = set5;
console.log(rest); //[2,3]

//집합 연산
//1. 교집합
Set.prototype.intersection = function(set){
    const result = new Set();
    for(const value of set){
        //여기서 this는 이 함수를 호출한 객체를 가리킨다. 
        if(this.has(value))
        result.add(value);
    }
    return result;
};
let setA = new Set([1,2,3,4]);
let setB = new Set([2,4]);
console.log(setA.intersection(setB));
//Set(2) { 2, 4 }

//1. 교집합(2)
Set.prototype.intersection2 = function(set){
    return new Set([...this].filter(e=>set.has(e)))
}
console.log(setA.intersection2(setB))

//2. 합집합
Set.prototype.union = function(set){
    //원래 객체를 set을 만든다.
    const result = new Set(this);
    //인수의 객체의 value를 순회하여 set에 넣는다.
    for(const value of set){
        result.add(value);
    }
    return result;
}
console.log(setA.union(setB));//Set(4) { 1, 2, 3, 4 }

//2. 합집합(2)
Set.prototype.union2 = function(set){
    return new Set([...this,...set]);
}

//3. 차집합
Set.prototype.difference = function(set){
    const result = new Set(this);
    for(const value of set){
        result.delete(value);
    }
    return result;
}
let setC = new Set([1,2,3]);
let setD = new Set([3,4,5]);
//setA : {1,2,3,4} setB{2,4}
console.log(setC.difference(setD));//Set(2) { 1, 2 }
console.log(setD.difference(setC));//Set(2) { 4, 5 }

//3.차집합(2)
Set.prototype.difference2 = function(set){
    return new Set([...this].filter(e=> set.has(e)));
}

//4. 부분집합과 상위 집합
Set.prototype.isSuperset = function(subset){
    for(const value of subset){
        if(!this.has(value))
        return false;
    }
    return true;
}
console.log(setA.isSuperset(setB)); //true

//4. 부분집합과 상위 집합(2)
Set.prototype.isSuperset2 = function(subset){
    const supersetArr = [...this];
    return [...subset].every(e=> supersetArr.includes(e));
};

