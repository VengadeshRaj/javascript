// Print true if given number is power of two

function isPowerOfTwo(n){
    if(n<1) return false
    else if(n ==1) return true;
    return isPowerOfTwo(n/2)
};

const result = isPowerOfTwo(8);

console.log(result)