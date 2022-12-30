const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "firstTeam.html");

const render = require("./lib/htmlRender");

const qs = [
  {
    type: "input",
    name: "name",
    message: "What is the team member's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What their id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "list",
    name: "role",
    message: "What is their role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const team = [];
const generateTeam = () => {
  inquirer
    .prompt(qs)
    .then((answer1) => {
      inquirer
        .prompt([
          {
            when: () => answer1.role === "Manager",
            type: "input",
            message: "What is their office number",
            name: "officeNumber",
          },
          {
            when: () => answer1.role === "Engineer",

            type: "input",
            message: "What is the Engineer's GitHub Username?",
            name: "github",
          },

          {
            when: () => answer1.role === "Intern",

            type: "input",
            message: "Where does the intern go to school?",
            name: "school",
          },

          {
            type: "confirm",
            message: "Add another member to the team?",
            name: "addMember",
          },
        ])

        .then((answer2) => {
          if (answer1.role === "Manager") {
            const manager = new Manager(answer1.name, answer1.id, answer1.email, answer1.role, answer2.officeNumber);
            team.push(manager);
          }

          if (answer1.role === "Engineer") {
            const engineer = new Engineer(answer1.name, answer1.id, answer1.email, answer1.role, answer2.github);
            team.push(engineer);
          }

          if (answer1.role === "Intern") {
            const intern = new Intern(answer1.name, answer1.id, answer1.email, answer1.role, answer2.school);
            team.push(intern);
          }
          if (answer2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Team Roster HTML created succesfully.");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();