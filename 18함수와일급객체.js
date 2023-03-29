//arguments객체는 length프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다. 

function sum(){
    let res= 0;
    for(let i = 0 ; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum()); //0
console.log(sum(2,3)); //5

//arguments객체는 유사배열 객체로 for문,length의 사용이 가능하나, 배열 매서드를 그대로 사용할 
//경우 에러가 발생한다.
//argument는 이터러블이라 for문 , for...of를 사용할 수 있으나, 배열은 아니기 떄문이다.

//rest파라미터 사용 (항상 마지막에 사용하자)
function sum(...args){
    return args.reduce((pre,cur)=>pre + cur,0)
}
console.log(sum(2,3)) //5

//name 프로퍼티
//기명함수 name
let namedFunc = function foo(){};
console.log(namedFunc.name); //foo

//익명함수 name
let notNamedFunc = function(){}; 
console.log(notNamedFunc.name); //notNamedFunc

//함수 선언문
function bar(){};
console.log(bar.name); //bar


 