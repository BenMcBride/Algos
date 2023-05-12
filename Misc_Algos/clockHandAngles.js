function clockHandAngles(seconds) {
  var secAngle = seconds * 6;
  var minAngle = secAngle / 60;
  var hourAngle = secAngle / 360;
  while (secAngle >= 360 || minAngle >= 360 || hourAngle >= 360) {
    if (secAngle >= 360) {
      secAngle -= 360;
    }
    if (minAngle >= 360) {
      minAngle -= 360;
    }
    if (hourAngle >= 360) {
      hourAngle -= 360;
    }
  }
  return `The hour hand is at ${hourAngle} degrees. The minute hand is at ${minAngle} degrees. The second hand is at ${secAngle} degrees.`;
}
console.log(clockHandAngles(10000));