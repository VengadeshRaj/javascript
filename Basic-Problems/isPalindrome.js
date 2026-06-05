function isPalindrome(value) {
  if (value < 0) return false;
  const originalValue = value;
  let reverse = 0;
  while (value > 0) {
    reverse = reverse * 10 + (value % 10);
    value = Math.floor(value / 10);
  }
  return reverse === originalValue;
}

const input = 112211;

const result = isPalindrome(input);

console.log(result);
