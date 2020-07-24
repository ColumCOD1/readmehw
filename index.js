//dependencies
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")



// array of questions for user
const questions = [
    {
        type: "input", 
        message: "What is the title of your project?",
        name: "Memes",
    },
    {
        type: "input", 
        message: "What is the description of your project?",
        name: "Description",
    },{
        type: "input", 
        message: "How are you installing your project?",
        name: "Installation",
    },{
        type: "list", 
        message: "What is your license?",
        name: "License",
        choices: ["MIT", "Zlib", "Apache-2.0", "None"]
    },{
        type: "input", 
        message: "What is the usage?",
        name: "Usage",
    },{
        type: "input", 
        message: "Who are the contributors?",
        name: "Contributors",
    },{
        type: "input", 
        message: "What tests did you initialize?",
        name: "Tests",
    },{
        type: "input", 
        message: "What questions do you have?",
        name: "Questions",
    },{
        type: "input", 
        message: "What is your Github username?",
        name: "Username",
    },{
        type: "input", 
        message: "What is your Email address?",
        name: "Email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  // function to initialize program
  function init() {
    inquirer.prompt(questions).then(function (response) {
      // creating a variable to fill the markdown template with user input data
      var markdownData = generateMarkdown(response);
      //writing the user input data to the readme
      writeToFile("README.md", markdownData);
    });
  }




// function call to initialize program
init();