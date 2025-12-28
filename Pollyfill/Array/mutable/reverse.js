// reverse --> modifies the original array and return it
// No arguments needs to passed in the callback

Array.prototype.myCustomReverse = function () {
  let left = 0;
  let right = this.length - 1;

  while (left < right) {
    const temp = this[left];
    this[left] = this[right];
    this[right] = temp;

    left++;
    right--;
  }

  return this;
};

const test = [1,2,3,4,5];

console.log(test.myCustomReverse())
