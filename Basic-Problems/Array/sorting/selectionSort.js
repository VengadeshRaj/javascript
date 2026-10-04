function selectionSort(nums){

    for(let i =0;i<nums.length;i++){
        let min = i; // assuming i value as minimum
        for(let j=i+1;j<nums.length;j++){ // starting loop from i+1 and run till nums.length
            if(nums[min]>nums[j]){
                min = j
            }
        }
        const temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp
    }

    return nums;

};

const input = [7, 3, 8, 1, 4, 9, 2, 5, 6];
const result = selectionSort(input);

console.log(result)
