function simpleArraySum(ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    total = total + element;
  }
  return total;
}

let array = [1, 2, 3];
console.log(simpleArraySum(array));
