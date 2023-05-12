// Implement a ‘die’ that randomly returns an 
// integer between 1 and 6 inclusive. Roll a pair of 
// these dice, tracking the statistics until doubles 
// are rolled. Display the ​number of rolls​, ​min​, ​max​, 
// and ​average​.
var die1 = 'die1';
var die2 = 'die2';

function reroll(){
  die1 = Math.floor(Math.random() * 7);
  die2 = Math.floor(Math.random() * 7);
}

while(die1 != die2){
  console.log(die1, die2);
  reroll();
}
console.log(die1, die2);