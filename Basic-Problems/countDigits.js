
function countDigits(value){
    if(value == 0 ) return 1;
    value = Math.abs(value);
    let count = 0;
    while (value > 0){
        value =Math.floor(value/10);
        count++
    }
    return count;
}

const input = 1234;

const result = countDigits(input);

console.log(result)