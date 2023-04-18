function average(arr){
  var sum = 0
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
}
average([23,7,34,87,32,1,23,6,87,1,500])