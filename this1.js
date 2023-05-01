const mike = {name : 'Mike'};
function update(birthYear, job){
    this.birthYear = birthYear;
    this.job = job;
}
update.call(mike,2000,'singer');
console.log(mike);

const jane = {name : 'Jane'};
update.apply(jane, [1999, 'artist']);
console.log(jane);
