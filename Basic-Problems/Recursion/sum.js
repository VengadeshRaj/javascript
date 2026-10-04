// Print the sum of values in the given limit 

function sum(n){
    if(n <= 0) return n; // Base condition : to stop the recursive
    return n+sum(n-1); // Recursive condition
};

const result = sum(5);

console.log(result);