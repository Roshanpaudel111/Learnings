const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    let steps = '';
    for (let s = 0; s < n - i - 1; s++) {
      steps += ' ';
    }
    for (let h = 0; h < i + 1; h++) {
      steps += '#';
    }
    console.log(steps);
  }
};

staircase(10);
