Array.prototype.customJoin = function(joinString){
    let result = "";

    for(let i =0;i<this.length;i++){
        if(i==0){ 
            result = result + this[i]
        }
        else {
            result = result + joinString + this[i]
        }
    }

    return result;
};


const test = ["v","e","n","k","a","t"];

const cusJoinResponse = test.customJoin("-");

const joinResponse =  test.join("-");

console.log(cusJoinResponse);
console.log(joinResponse);