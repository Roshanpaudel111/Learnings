arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function main(array) {
  // Matrix places
  // 00 01 02
  // 10 11 12
  // 20 21 22

  let ltr = 0; // left to right diagonal
  let rtl = 0; // right to left diagonal

  for (let i = 0; i < array.length; i++) {
    ltr += array[i][i];
    rtl += array[i][array.length - (i + 1)];
  }

  // returns absolute difference between left to right diagonal
  // and right to left diagonal
  return Math.abs(rtl - ltr);
}

console.log(main(arr1));
