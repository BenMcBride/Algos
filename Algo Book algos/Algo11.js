function square(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
  return arr;
}
square([5,2,8,2,21,9])