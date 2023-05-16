// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
]; 

function findObjectsFilter(searchObj, items) {
  return items.filter(item => { // return the filtered items
    for (var key in searchObj) { // loop through each key in searchObj
      if (item[key] !== searchObj[key]) { // if value of key doesn't match searchObj's value
        return false; // filter doesn't include keys that don't match
      }
    }
    return true; // filter includes the rest of the keys (that do match)
  });
}

// function findObjectsFilter(searchObj, items) {
//   let answers = [];
//   for (const person of items) {
//     let found = true;
//     for (key in searchObj) {
//       if (person[key] != searchObj[key]) {
//         found = false;
//       }
//     }
//     if (found === true){
//       answers.push(person);
//     }
//   }
//   return answers;
// }

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));