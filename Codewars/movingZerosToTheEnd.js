function moveZeros(arr) {
  let newArr = [];
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else {
      count++;
    }
  }
  for (var i = 0; i < count; i++) {
    newArr.push(0);
  }
  return newArr;
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
