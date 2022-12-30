const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
     super(name, id, email);
     this.school = school;
    }
// constructor for intern's school
    getSchool() {
        return this.school;
    }
// constructor for Intern class
    getRole() {
        return "Intern";
    }
}
const intern = new Intern();
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;