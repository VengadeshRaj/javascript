// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Leet code problem number : 88

function mergeSortedArray(nums1, m, nums2, n) {
  const nums1Copy = nums1.slice(0, m);// [1, 2, 3, 0, 0, 0] --> [1,2,3]
  let p1 = 0; // position to track nums1Copy
  let p2 = 0; // // position to track nums2

  // Run loop till sorted completion m+n
  for (let i = 0; i < m + n; i++) {
    // Check p2 is out of boundry or nums1Copy value is smaller than nums2 and check p1 is within boundry
    if (p2 >= n || (nums1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return nums1;
}

const numsArray1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const numsArray2 = [2, 5, 6];
const n = 3;

const result = mergeSortedArray(numsArray1, 3, numsArray2, n);

console.log(result);
