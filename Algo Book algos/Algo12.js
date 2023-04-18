function zeroNegs(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
zeroNegs([12,-5,21,-6,8,-2,123,-6454,-23,-312])