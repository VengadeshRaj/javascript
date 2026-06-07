function findSmallest(numbers) {
  let smallest = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) smallest = numbers[i];
  }

  return smallest;
}

const input = [23, 12, -25, 98, 72, 3, 65, -12, 33, 1, 10, 43, 23];
const result = findSmallest(input);

console.log(result);
