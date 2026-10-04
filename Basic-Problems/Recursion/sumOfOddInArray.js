// Print sum of odd values present in the array

const arr = [5,3,2,0,1,7];

function sum(n){
    const isOdd = (arr[n]%2 !== 0) ? true: false; // calculate whether is odd or not
    if(n<=0) return isOdd ? arr[n]:0; // base condition
    return isOdd ? arr[n]+sum(n-1):0+sum(n-1) // recursive condition
};

const result = sum(arr.length-1);

console.log(result)