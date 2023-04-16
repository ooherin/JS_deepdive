//JSON.stringify 는 객체를 JSON 포맷의 문자열로 변환함.
///이를 직렬화라고 한다.
//값을 제외하고는 모두 ""안에 넣는다.

const obj = {
  name: "lee",
  age: 20,
  hobby: ["travel", "hike"],
};
const json = JSON.stringify(obj);
console.log(typeof json, json);
//string {"name":"lee","age":20,"hobby":["travel","hike"]}

//객체를 JSON문자열로 변환하면서 들여쓰기 하는법
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
//string {
// "name": "lee",
// "age": 20,
// "hobby": [
//   "travel",
//   "hike"
// ]

//값의 타입이 number이면 필터링해서 반환되지 않는 함수
function filter(key, value) {
  return typeof value === "number" ? undefined : value;
}

//filter사용법 pretty와 비슷, 중간에 null대신 filter넣기
const strfilteredObj = JSON.stringify(obj, filter, 2);
console.log(typeof strfilteredObj, strfilteredObj);

// string {
//   "name": "lee",
//   "hobby": [
//     "travel",
//     "hike"
//   ]
// }

//배열 변환하는 법
const todos = [
  { id: 1, content: "html", completed: false },
  { id: 2, content: "css", completed: true },
  { id: 3, content: "js", completed: false },
];
const todosjson = JSON.stringify(todos, null, 2);
console.log(todosjson);
//[
//   {
//     "id": 1,
//     "content": "html",
//     "completed": false
//   },
//   {
//     "id": 2,
//     "content": "css",
//     "completed": true
//   },
//   {
//     "id": 3,
//     "content": "js",
//     "completed": false
//   }
// ]

//JSON.parse
//JSON포맷의 문자열을 객체로 변환한다.

const obj5 = {
  name: "tori",
  type: "rabbit",
  age: 3,
  color: "yellow",
};
const obj5json = JSON.stringify(obj5, null, 2);
const parsed = JSON.parse(obj5json);
console.log(typeof parsed, parsed);
//object { name: 'tori', type: 'rabbit', age: 3, color: 'yellow' }
