function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  function sort(L, R) {
    const result = [];
    let P1 = 0;
    let P2 = 0;
    const totalLen = L.length + R.length
    for (let i = 0; i < totalLen; i++) {
      if ((L[P1] < R[P2] && P1 < L.length) || P2 >= R.length) {
        result.push(L[P1]);
        P1++;
      } else {
        result.push(R[P2]);
        P2++;
      }
    }
    return result;
  }
  const middle = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, middle));
  const right = mergeSort(nums.slice(middle));
  return sort(left, right);
}

const input = [7, 3, 8, 1, 4, 9, 2, 5, 6];
const result = mergeSort(input);

console.log(result);
