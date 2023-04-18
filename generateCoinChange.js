//I am making this assuming only coins available are quarters, dimes, nickels, and pennies,
// and also assuming all inputs will be counted in cents
function generateCoinChange(cents) {
  if (cents >= 25) {
    var quarters = Math.floor(cents / 25);
    cents = cents - quarters * 25;
  }
  if (cents >= 10) {
    var dimes = Math.floor(cents / 10);
    cents = cents - dimes * 10;
  }
  if (cents >= 5) {
    var nickels = Math.floor(cents / 5);
    cents = cents - nickels * 5;
  }
  if (cents >= 1) {
    var pennies = cents;
  }
  console.log("Your change is: ");
  if (quarters != undefined && quarters > 1) {
    console.log(quarters + " quarters");
  } else if (quarters != undefined) {
    console.log(quarters + " quarter");
  }
  if (dimes != undefined && dimes > 1) {
    console.log(dimes + " dimes");
  } else if (dimes != undefined) {
    console.log(dimes + " dime");
  }
  if (nickels != undefined && nickels > 1) {
    console.log(nickels + " nickels");
  } else if (nickels != undefined) {
    console.log(nickels + " nickel");
  }
  if (pennies != undefined && pennies > 1) {
    console.log(pennies + " pennies");
  } else if (pennies != undefined) {
    console.log(pennies + " penny");
  }
}
generateCoinChange(3241);
