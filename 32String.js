//~598
//substring
//indexOf와 같이 사용하면 특정 문자열을 기준으로 앞뒤의 문자열을 가져올 수 있다.
const str = 'hello world';
const front = str.substring(0,str.indexOf(' '));
const back = str.substring(str.indexOf(' ')+1,str.length);
console.log(front,back); //hello world

//slice
//정규표현식을 인수로 사용하면 공백 문자로 제거할 수 있다.
const str1  = '  foo  ';
console.log(str1.replace(/\s/g,'')); //'foo'
console.log(str1.replace(/^\s+/g,'')); //'foo  '
console.log(str1.replace(/\s+$/g,'')); //'  foo'

//repeat 
console.log(str1.repeat(2));//  foo    foo 

//replace(첫번째인수 : 바꾸고 싶은 문자열 , 두번째 인수 : 바꿀 문자열)
console.log(str.replace('world','rain'));
//hello rain

//바꾸고 싶은 문자열이 2개 이상이면 첫번째 문자열만 바꾼다. 
const str2 = 'hello world world';
console.log(str2.replace('world','beautiful'));//hello beautiful world
console.log(str2); //hello world world

//split
const str3 = '벚꽃이 폈다'
console.log(str3.split(' '));//[ '벚꽃이', '폈다' ]
console.log(str3.split(''));// '벚', '꽃', '이', ' ', '폈', '다' ]
console.log(str3.split(/\s/));//[ '벚꽃이', '폈다' ]
console.log(str3.split());//[ '벚꽃이 폈다' ]





