function bubleSort(nums){
    const n = nums.length
    for(let i =0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(nums[j]>nums[j+1]){
                const temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

const input = [3,6,4,1,7,2,5]
const result = bubleSort(input);

console.log(result)