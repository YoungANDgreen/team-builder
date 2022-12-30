


// "Employee" is the parent class 
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
//   constructor for employee name
    getName() {
      return this.name;
    }
//   constructor for employee id  
    getId() {
      return this.id;
    }
//   constructor for employee email  
    getEmail() {
      return this.email;
    }
//   constructor for employee class   
    getRole() {
      return "Employee";
    }
  }
  
  //export the Employee class
  module.exports = Employee;