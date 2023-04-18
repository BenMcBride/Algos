function shiftArr(arr) {
  console.log(arr); // just for comparison
  for(var i = 1; i < arr.length; i++){
    arr[i-1] = arr[i];
  }
  arr[arr.length - 1] = 0;
  console.log(arr); 
  return arr;
}
shiftArr([23,7,-34,87,32,1,-23,6])