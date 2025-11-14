const user = {
name: 'john',
age: 28,
education:{
    degree:'B.E',
    percentage:80,
    marks:[80,90]
}
};

function deepCopy(obj){
    // To handle if the value is not in (undefined, Array and object)
    if(!obj || typeof obj !== 'object') return obj;

    const result = Array.isArray(obj) ? [] :{}

    for(let key in obj){
        result[key] = deepCopy(obj[key])
    }

    return result;
}

const newUser = deepCopy(user);

console.log("newUser",newUser)