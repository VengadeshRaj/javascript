class myCustomPromise {
    constructor(exeFunction) {
        let onResolve, onReject, isFullfilled = false, isCalled = false, localValue;

        function resolve(value) {
            isFullfilled = true;
            localValue = value;
            if (typeof onResolve === 'function') {
                isCalled = true;
                onResolve(value);
            }
        }
        function reject(value) {
            isFullfilled = true;
            localValue = value;
            if (typeof onReject === 'function') {
                isCalled = true;
                onReject(value);
            }
        }
        this.then = function (cbFn) {
            onResolve = cbFn;
            if (isFullfilled && !isCalled) {
                isCalled = true;
                onResolve(localValue);
            }
            return this;
        };
        this.catch = function (cbFn) {
            onReject = cbFn;
            if (isFullfilled && !isCalled) {
                onReject(localValue);
            }
            return this;
        };
        exeFunction(resolve, reject);
    }
}

const result = new myCustomPromise((resolve,reject)=>{
    setTimeout(() => {
        resolve('completed')
    }, 2000);
})

result.then((resolve)=>{
console.log(resolve)
}).catch((err)=>{
    console.error(err);
})

Promise.customerAll=  function(promises)
{
    return new Promise((resolve,reject)=>{
        const result  = [];
        if(promises.length  == 0){
            resolve(result);
        }
        promises.forEach((eachEle,i)=>{
            Promise.resolve(eachEle).then((res)=>{
            result.push(res);
            if(i == promises.length-1)
            {
                resolve(result)
            }
            })
            
        },reject)
    })
}

function goToOffice()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('Came to office')
        }, 2000);
    })
}

function eatLunch()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Ate lunch')
        }, 2000);
    })
}

function gotToHome()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Came to home')
        }, 2000);
    })
}

Promise.customerAll([goToOffice(),eatLunch(),gotToHome()])
.then((resolve)=>{
    console.log(resolve)
})