// The Factory method pattern provides an interface for creating objects
// that can be modified after creation.
// The cool thing about this is that the logic for creating our objects is centralized in a single place,
// simplifying and better organizing our code.

// Factory design patterns can be implemented in two different ways,
// via classes or factory functions

// Implementation 1 : Class
class User {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  getUserName() {
    console.log(this.name);
  }
  getJob() {
    console.log("he/she is a " + this.job);
  }
}

const UserInstance = new User("John", "Doctor");

UserInstance.getUserName();
UserInstance.getJob();

// Implementation 2 : Factory function

function Employee(name, job) {
  this.name = name;
  this.job = job;
}

Employee.prototype.getName = function(){
    console.log(this.name)
}

const EmployeeInstance = new Employee("Erick", "Engineer");

EmployeeInstance.getName();
