const Person = {
    [Symbol.for('height')] : 160,
    name : 'kim',
    age : 20, 
  }
//   console.log(Per`son); 
  //{ name: 'kim', age: 20, [Symbol(height)]: 160 }

for(const key in Person){
    console.log(key);
}
//name
// age

//symbol찾는법
  const symbolkey = Object.getOwnPropertySymbols(Person)[0];
//   console.log(symbolkey); //Symbol[height]
  
//symbol로 메서드 생성시, 기존 메서드와 충돌하지 않음
Array.prototype[Symbol.for('sum')] = function(){
    return this.reduce((acc,cur)=> acc + cur,0);
};

console.log([1,2,3,4,5][Symbol.for('sum')]()); //3