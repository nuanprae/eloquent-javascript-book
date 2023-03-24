const reverseArray = (array) => {
  let newArray = [];

  for (let index in array) {
    const lastIndexInArray = array.length - 1;
    newArray.push(array[lastIndexInArray - index]);
  }

  return newArray;
};

export default reverseArray;
