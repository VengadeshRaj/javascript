function findSecondLargest(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (secondLargest < numbers[i]) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
}

const input = [12, 4, 23, 99, 88, 43, 90, 100, 21, 34];

const result = findSecondLargest(input);

console.log(result);
