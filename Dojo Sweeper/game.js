var dojoDiv = document.querySelector("#the-dojo");
var theDojo = [];
var dojoSize = 10;
var maxNinjas = 10;
function drawDojo() {
  // write theDojo array to be theDojo variable's size
  for(var i = 0; i < dojoSize; i++){
    var arr = []
    for(var n = 0; n < dojoSize; n++){
      arr.push(0)
    }
    theDojo.push(arr)
  }
  // put ninjas in dojo
  // x and y coordinates are random coordinates within the dojo
  var x = Math.floor(Math.random() * dojoSize)
  var y = Math.floor(Math.random() * dojoSize)
  // maxNinjas will count down to 0 everytime it adds a ninja
  while(maxNinjas > 0){
    // if the random coordinate isn't a ninja
    if(theDojo[y][x] === 0){
      // then replace it with a ninja and increment maxNinjas -1
      theDojo[y].splice(x, 1);
      theDojo[y].splice(x, 0, 1);
      maxNinjas--;
      // get new random values for x and y
      x = Math.floor(Math.random() * dojoSize);
      y = Math.floor(Math.random() * dojoSize);
    } else {
      x = Math.floor(Math.random() * dojoSize);
      y = Math.floor(Math.random() * dojoSize);
    }
  }
  dojoDiv.style.width = 32 * dojoSize + "px";
  dojoDiv.innerHTML = render(theDojo);
  return theDojo;
}
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button id="btn` + i + '-' + j + `" class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
var count = 0;
function howMany(i, j, element) {
  if(theDojo[i][j] == 1){
    element.innerHTML = 'X';
    element.style.color = 'red';
    console.log(element.innerHTML);
    alert('Game Over')
  } else {
    for(var x = j - 1; x <= j + 1; x++){
      for(var y = i - 1; y <= i + 1; y++){
        if(x < 0 || x > dojoSize - 1 || y < 0 || y > dojoSize - 1 || (y == i && x == j)){
        } 
        else if(theDojo[y][x] > 0) {
          count++;
        }
      }
    }
    element.innerHTML = count;
    if(count == 0) {
      spreadZeros(i, j);
    } else {
      count = 0;
    }
  }
}
function spreadZeros(i, j) {
  for(var x = j - 1; x <= j + 1; x++){
    for(var y = i - 1; y <= i + 1; y++){
      var element2 = document.getElementById('btn'+y+'-'+x)
      if(x < 0 || x > dojoSize - 1 || y < 0 || y > dojoSize - 1 || (y == i && x == j)){
      } 
      else if(theDojo[y][x] == 0 && element2.innerHTML == '') {
        howMany(y, x, element2);
        // element2.innerHTML = count;
        // count = 0;
        
      }
    }
  }
}  


    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
// adds the rows of buttons into <div id="the-dojo"></div> 
drawDojo();    
console.log(theDojo)