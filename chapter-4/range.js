const range = (start, end) => {
  let numbers = [];

  for (let index = start; index <= end; index++) {
    numbers.push(index);
  }

  return numbers;
};

export default range;
