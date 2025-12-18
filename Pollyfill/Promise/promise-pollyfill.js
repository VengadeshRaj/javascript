function CustomPromise(executer) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isCalled = false,
    localValue;

  function resolve(value) {
    isFullfilled = true;
    localValue = value;
    if (onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(value) {
    if (onReject == "function") {
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
    return this;
  };

  executer(resolve, reject);
}

const result = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
  resolve("Hey im resolved after delay");
  }, 2000);
});

result.then((res) => console.log(res));
