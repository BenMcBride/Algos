function noNegatives(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo'
    }
  }
  console.log(arr)
}
noNegatives([10,-55,20,-40,0])