function maxMinAverage(arr){
  var min = arr[0]
  var max = arr[0]
  var sum = 0
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if( arr[i] > max){
      max = arr[i];
    }
  }
  for(var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  var avg = sum / arr.length
  console.log("max value is: " + max)
  console.log("min value is: " + min)
  console.log("average value is: " + avg)
}
maxMinAverage([5,10,2,100,-5])

// var arr = [1, 2, 3, 4, 5];  // Replace with your own array

// var maxVal = Math.max.apply(Math, arr);
// var minVal = Math.min.apply(Math, arr);
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// var avgVal = sum / arr.length;

// console.log("Max value: " + maxVal);
// console.log("Min value: " + minVal);
// console.log("Average value: " + avgVal);