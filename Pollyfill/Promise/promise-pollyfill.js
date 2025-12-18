function CustomPromise(executer) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    localValue;

  function resolve(value) {
    isFullfilled = true;
    localValue = value;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(value) {
    isRejected = true;
    localValue = value;
    if (typeof onReject === "function") {
      onReject(value);
      isCalled = true;
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
    if(isRejected && !isCalled){
      onReject(localValue)
    }
  };

  executer(resolve, reject);
}


const result = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
  resolve("Hey im resolved after delay");
  }, 2000);
});

result.then((res) => console.log(res)).catch((err)=> console.log(err))
