// includes ---> Returns a boolean indicating whether or not an array contains a specified value.

Array.prototype.customIncludes = function(value){ 
    for(let i=0;i<this.length;i++){
        // If value found in the loop return true
        if(this[i] === value) return true;
    }

    // Value not found in the loop so return false
    return false;
}

const test = [1,2,3,4];

const result = test.includes(3);

console.log(result);

const customResult = test.customIncludes(3);

console.log(result);