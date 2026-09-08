// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Leet code Problem no : 704

function binarySearch(nums,target){
    let L = 0;
    let R = nums.length -1;

    while(L<=R){
        const M = Math.floor((L+R)/2);
        if(nums[M] == target){
            return M;
        }
        else if(nums[M]> target){
            R = M-1
        }else {
            L = M+1;
        }
    }

    return -1;
}

const input = [-1,0,3,5,9,12];
const target = 12;

const result = binarySearch(input,target);

console.log(result)