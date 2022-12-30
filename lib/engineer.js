const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

const engineer = new Engineer
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();
// exports Engineer class
module.exports = Engineer;