//p.620
//유사 배열 객체
const 유사배열 = {
    0 : 1,
    1 : 2 ,
    2 : 3,
    length : 3
}
const arr = Array.from(유사배열);
console.log(arr); //[1,2,3]
