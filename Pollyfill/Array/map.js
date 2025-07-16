Array.prototype.customMap = function(callbackFn){
    // Create result array to store response
    const result = [];
    // Iterating array
        for(let i =0;i<this.length;i++){
            // Pushing response of callback function into result
            result.push(callbackFn(this[i],i));
        }
    // return response
    return result;
};


const test = [1,2,3,4];

const cusMapResult = test.customMap((ele,i)=> ele*i);
const mapResult = test.map((ele,i)=> ele*i);

console.log(cusMapResult);

console.log(mapResult);

