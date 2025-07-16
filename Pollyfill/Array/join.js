Array.prototype.customJoin = function(joinString){
     // Create result string to store response
    let result = "";
    // Iterating array
    for(let i =0;i<this.length;i++){
        // Check if i is 0 then directly append element to result
        if(i==0){ 
            result = result + this[i]
        }
        // Append each element with joining string
        else {
            result = result + joinString + this[i]
        }
    }
    //Return response
    return result;
};


const test = ["v","e","n","k","a","t"];

const cusJoinResponse = test.customJoin("-");

const joinResponse =  test.join("-");

console.log(cusJoinResponse);
console.log(joinResponse);