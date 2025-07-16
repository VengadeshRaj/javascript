Array.prototype.customJoin = function(separator=","){ // Setting default separator value as ","
    // Convert separator into string to avoid unexpected type mismatch 
    separator = String(separator);
     // Create result string to store response
    let result = "";
    // Iterating array
    for(let i =0;i<this.length;i++){
        // Check if i is 0 then directly append element to result
        if(i==0){ 
            result = result + this[i]
        }
        // Append each element with separator string
        else {
            result = result + separator + this[i]
        }
    }
    //Return response
    return result;
};


const test = [1,2,3,4,5];

const cusJoinResponse = test.customJoin("-");

const joinResponse =  test.join("-");

console.log(cusJoinResponse);
console.log(joinResponse);