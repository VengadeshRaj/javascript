// In this problem input will be always sorted non-decending and we need to modify the array in-place
// Input will be numbers

function removeDupsFromSorted(nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    // Checking unique value by position and value present in the loop
    if (nums[position] < nums[i]) {
      position++;
      nums[position] = nums[i];
    }
  }

  return { position, nums };
}

const input = [0, 0, 0, 1, 1, 2, 3, 3, 4, 4, 4, 5];

const result = removeDupsFromSorted(input);

console.log(result);
