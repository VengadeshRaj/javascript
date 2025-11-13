// call, apply and bind are different ways to invoke a function
// by manually setting the this value. and its available in every javascript function

const user = {
  firstName: "Vengadesh",
  lastName: "raj",
};

function printUserDetails(age, job) {
  console.log(
    this.firstName +
      this.lastName +
      ", he/she is" +
      age +
      "years old" +
      " and he is working as " +
      job
  );
}

//using call method
// Its immediately invoked and first arg is "this" object and rest will be particular function arg

printUserDetails.call(user, 27, "software engineer");

//using apply method
// Its immediately invoked and first arg is "this" object 
// and function arg should passed as a second arg in array

printUserDetails.apply(user,[ 27, "software engineer"]);

//using bind method
// Does not not invoke the function immediately, it will return a function to invoke it
// first arg is "this" object and rest will be particular function arg

const response = printUserDetails.bind(user,27, "software engineer");

response();