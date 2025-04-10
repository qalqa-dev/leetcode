function greaterThan10(n) {
  return n > 10;
}

var filter = function (arr, fn) {
  const result = [];
  for (item of arr) {
    const index = arr.indexOf(item);
    const isValid = fn(item, index);
    if (isValid) {
      result.push(arr[index]);
    }
  }
  return arr;
};

console.log(filter([0, 10, 20, 30], greaterThan10));
