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