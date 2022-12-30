const Employee = require("./employee");


// "Manager" is the parent class 
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

//   constructor for Manager office number
    getofficeNumber() {
        return this.officeNumber;
    }
//   constructor for Manager class   
    getRole() {
      return "Manager";
    }
  }
  
  const manager = new Manager();
  manager.getName();
  manager.getId();
  manager.getEmail();
  manager.getofficeNumber();
  manager.getRole();
  //export the Manager  class
  module.exports = Manager;