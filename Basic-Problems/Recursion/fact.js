// print factorial of given array


function factorial(n){
    if(n <= 1) return 1; // base condition
    return n* factorial(n-1); // recursive condition
};

const result = factorial(5);

console.log(result)