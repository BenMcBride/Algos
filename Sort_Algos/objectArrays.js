/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [["name", "Pizza"], ["calories", 9001]];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 99],
];

// bonus - uncomment
obj1.__proto__ = obj2;

// decide your ALGO roles:
// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(obj) {
  var result = [];
  for (var key in obj) {
    var subarray = [];
    subarray.push(key);
    subarray.push(obj[key]);
    result.push(subarray);
  }
  return result;
}

  // remember to write the pseudocode first!

  console.log(entries(obj1));
  console.log(entries(obj2));

// ==================================================
/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// RIOT

function insert(tableName, columnValuePairs) {
  let keyString = ""
  let valueString = ""
  for (let key in columnValuePairs) {
    keyString += `${key}, `
    valueString += `'${columnValuePairs[key]}', `
  }
  keyString = keyString.slice(0, -2)
  valueString = valueString.slice(0, -2)
  return `INSERT INTO ${tableName} (${keyString}) VALUES (${valueString});`
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));