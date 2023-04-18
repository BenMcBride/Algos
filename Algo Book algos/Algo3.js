function findMax(arr){
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  console.log(max)
}
findMax([5,233,1,-344,19])