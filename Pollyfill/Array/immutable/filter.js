// filter --> Creates a new array with all elements that pass a test specified by a function.
// It will take three arguments in the callback function
// Example callback(value, index, array)
// value ---> element of current loop
// index ---> index of the each loop
// array ---> whole array itself

Array.prototype.customFilter =  function(callbackFn){
    // Create result array to store response
    const result  = [];
    // Iterating array
    for(let i=0;i<this.length;i++){
        //Pushing the result into result only if its satisfy the callback condition
        if(callbackFn(this[i],i)) result.push(this[i])
    }
    //Return response
    return result;
};

const numArray = [1,2,3,4,5];

const cusFilterResponse = numArray.customFilter((ele)=> ele > 3);

const filterResponse = numArray.filter((ele)=> ele > 3);

console.log(cusFilterResponse);

console.log(filterResponse);