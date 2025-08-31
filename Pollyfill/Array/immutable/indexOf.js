// indexOf --> Returns a boolean indicating whether or not an array contains a specified value.

Array.prototype.customIndexOf = function(value){
    for(let i =0;i<this.length;i++){
         // If value found in the loop return the index
        if(this[i] === value) return i;
    }

    // Value never found so return -1
    return -1;
};

const test = [1,2,3,4];

const result = test.indexOf(3);

console.log(result);

const customResult = test.customIndexOf(3);

console.log(result);