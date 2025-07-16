// One of the Non mutating array method
// It will take three arguments in the callback function
// Example callback(value, index, array)
// value ---> element of current loop
// index ---> index of the each loop
// array ---> whole array itself

Array.prototype.customMap = function(callbackFn){
    // Create result array to store response
    const result = [];
    // Iterating array
        for(let i =0;i<this.length;i++){
            // Pushing response of callback function into result
            result.push(callbackFn(this[i],i,this));
        }
    // return response
    return result;
};


const test = [1,2,3,4];

const cusMapResult = test.customMap((ele,i)=> ele*i);
const mapResult = test.map((ele,i)=> ele*i);

console.log(cusMapResult);

console.log(mapResult);

