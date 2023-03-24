const sum = (array) => {
  let total = 0;

  for (let index in array) {
    total += array[index];
  }

  return total;
};

export default sum;
