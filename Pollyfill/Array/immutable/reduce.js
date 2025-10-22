Array.prototype.customReduce = function(cbFn,acc=0){

    for(let i =0;i<this.length;i++){
        acc = cbFn(acc,this[i],i,this)
    }

    return acc;
};

const numbers = [1, 2, 3, 4];

const reduceResult = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});

const customReduceResult = numbers.customReduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});

console.log("reduceResult", reduceResult)

console.log("customReduceResult", customReduceResult)
