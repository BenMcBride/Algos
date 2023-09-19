function parseInt(string) {
  const wordMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
  const words = string.split(/\s|-/);
  let result = 0;
  let currentNumber = 0;
  for (const word of words) {
    const number = wordMap[word.toLowerCase()];
    if (word === "and") {
      continue;
    }
    if (number === undefined) {
      throw new Error("Invalid input");
    }
    if (number === 100) {
      currentNumber *= number;
    } else if (number === 1000 || number === 1000000) {
      result += currentNumber * number;
      currentNumber = 0;
    } else {
      currentNumber += number;
    }
  }
  return result + currentNumber;
}
console.log(parseInt("one"));
console.log(parseInt("twenty"));
console.log(parseInt("two hundred forty-six"));
console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
