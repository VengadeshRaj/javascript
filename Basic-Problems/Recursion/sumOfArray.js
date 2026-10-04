// Print the sum of all the values present in the array
const arr = [5,3,2,0,1];

function sum(n){
    if(n <=0) return arr[0]; // Base condition
    return arr[n]+ sum(n-1) // Recursive condition
}

const result = sum(arr.length-1);

console.log(result)