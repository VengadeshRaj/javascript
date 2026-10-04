// Print the sum of values in the given limit 

function sum(n){
    if(n <= 0) return n;
    return n+sum(n-1);
};

const result = sum(5);

console.log(result);