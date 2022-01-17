const add = a => {
  const addSecondary = b => {
    return a + b;
  };

  return addSecondary;
};

console.log(add(2)(3)); // 5
console.log(add(1)(2)); // 3
