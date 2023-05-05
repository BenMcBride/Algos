// function ThreesFives() {
//   var sum = 0;
//   for (var i = 100; i <= 4000000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     } else if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// ThreesFives()

function BetterThreesFives(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
BetterThreesFives(10, 20);
