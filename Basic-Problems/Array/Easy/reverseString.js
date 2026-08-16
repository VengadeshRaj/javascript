// Need to reverse the charactors present in the array

function reverseArray(arr) {
  const length = arr.length;
  const halfLength = Math.floor(length / 2);

  // Running half loop since for reverse half iteration is enough
  for (let i = 0; i < halfLength; i++) {
    let temp = arr[i];
    // Swapping current iteration value with values from last
    arr[i] = arr[length - 1 - i];
    arr[length - i] = temp;
  }

  return arr;
}

const input = ["h", "e", "l", "l", "o"];

const result = reverseArray(input);

console.log(result);
