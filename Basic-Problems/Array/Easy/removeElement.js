// Given array will have numbers need to remove the given value in place

function removeElement(nums, value) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== value){
        nums[position]= nums[i];
        position++;
    }
  }

  return { position, nums };
}

const input = [0, 1, 2, 1, 4, 1, 6, 9, 7, 7, 2, 3, 5, 0];

const valueToRemove = 1;

const result = removeOccurance(input, valueToRemove);

console.log(result);
