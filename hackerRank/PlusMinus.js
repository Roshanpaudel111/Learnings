// console.log(Number(1.123456).toFixed(5)); Used this logic.

function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number === 0) {
      zeros += 1;
    }
    if (number < 0) {
      negativeNumbers += 1;
    }
    if (number > 0) {
      positiveNumbers += 1;
    }
  }
  const negRatio = negativeNumbers / arr.length;
  const posRatio = positiveNumbers / arr.length;
  const zeroRatio = zeros / arr.length;
  console.log(Number(posRatio).toFixed(6));
  console.log(Number(negRatio).toFixed(6));
  console.log(Number(zeroRatio).toFixed(6));
}

plusMinus([0, 0, -1, 1, 1]);
