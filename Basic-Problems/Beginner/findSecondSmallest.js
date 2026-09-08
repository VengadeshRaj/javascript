function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
      secondSmallest = smallest;
      smallest = numbers[i];
    } else if (secondSmallest > numbers[i]) {
      secondSmallest = numbers[i];
    }
  }

  return secondSmallest;
}

const input = [45, 67, 6, 12, 33, 89, 4, 12, 90, 32];

const result = findSecondSmallest(input);

console.log(result);
