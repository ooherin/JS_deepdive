console.log(0.1 + 0.2);//0.30000000000000004
//js에서는 부동소수점 연산은 정확한 결과가 안나온다.
//이를 위해 Number.EPISON을 쓰기도 한다
function isEqual(a,b){
    return Math.abs(a-b)  < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2,0.3)); //true

//Number.isFinite와 isFinite의 차이점
//Number.isFinite는 인수를 숫자로 형변환하지 않으나, isFinite는 숫자로 형변환한다.
console.log(Number.isFinite(null)); //false
console.log(isFinite(null)); //true

//Number.isInteger : 정수인지 검사
console.log(Number.isInteger(0)); //true
console.log(Number.isInteger('123')); //false

//Number.isNaN : NaN인지 검사
//Number.isFinite와 마찬가지로 형변환은 하지 않는다. 그러나 일반 isNaN은 암묵적 형변환한다.
console.log(Number.isNaN(undefined)); //false
console.log(isNaN(undefined)); //true
//undefined는 NaN으로 암묵적 타입 변환된다.

//toFixed : 반올림하여 문자열로 반환한다. 인수로 소숫점이하 자릿수를 정할 수 있다.
console.log((1234.5678).toFixed()); //1235
console.log((1234.5678).toFixed(3)); //1234.568

//toPrecision : 반올림하여 문자열로 반환하고, 큰 숫자는 지수 표기법을 사용(e)
console.log((12345.6789).toPrecision(1)); //1e+4;

//Number.toString: 숫자를 문자열로 반환한다.()안에 인수는 진수를 가리킨다. 비어있으면 10진수이다.
console.log((1234).toString()); ///1234
//앞에 숫자를 집어넣을 때는 ()안에 넣어야 한다.
 
