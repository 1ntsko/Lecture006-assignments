const addSuffix = suffix => {
  const addString = str => {
    return str + suffix;
  };

  return addString;
};

const addLy = addSuffix('ly');
console.log(addLy('hopeless')); // hopelessly

const addLess = addSuffix('less');
console.log(addLess('fear')); // fearless
