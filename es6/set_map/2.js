const people = new Set();// 实例化了Set 内置数据结构
people.add('Wes');
people.add('世龙');
people.add('111');
people.add('111');
// console.log(people);
for (const person of people) {
    console.log(people);
}
const students = new Set(['Wes','kaar','tony']);
const dogs = ['sincj','sunny'];
const dogSet = new Set(dogs);