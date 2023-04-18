function diceRoller(num, sides) {
  while (num > 0){
    num--
    console.log(Math.floor(Math.random() * sides) + 1);
  }
  return 
}
diceRoller(4, 8);