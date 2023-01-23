const arr1 = [1, 3, 5, 7, 9];

const minMaxSum = (arr) => {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  const minArr = arr.filter((element) => {
    return element !== maxValue;
  });

  const maxArr = arr.filter((element) => {
    return element !== minValue;
  });

  const maxSum = maxArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const minSum = minArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log(minSum, maxSum);
};

minMaxSum(arr1);
