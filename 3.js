var personInfo = [
  { name: "fahimeh", age: 21 },
  { name: "mohammad", age: 18 },
  { name: "hossein", age: 24 },
  { name: "fatemeh", age: 22 },
  { name: "faezeh", age: 25 },
  { name: "amir", age: 2 },
  { name: "shima", age: 33 },
];
function sortedAge() {
  return personInfo.sort((a, b) => b.age - a.age);
}
console.log(sortedAge());
