const multipliedSum = arr => {
  const sum = arr.reduce((acc, curr) => acc + curr);

  const multiplied = number => {
    return sum * number;
  };

  return multiplied;
};

console.log(multipliedSum([1, 2, 3, 4])(2)); // => 20 // sum of array items multiplied by 2
console.log(multipliedSum([1, 2])(3)); // => 9 // sum of array items multiplied by 3
console.log(multipliedSum([0])(20)); // => 0 // sum of array items multiplied by 20
