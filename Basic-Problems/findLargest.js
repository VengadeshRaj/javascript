function findLargest(numbers) {
  let largest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) largest = numbers[i];
  }
  return largest;
}

const input = [2, 12, 230, 8, 40, 15, 90, 265];
const result = findLargest(input);

console.log(result);
