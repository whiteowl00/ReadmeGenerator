const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of project?"
    },
    {
        type:"input",
        name:"description",
        message:"What is the description of your project?"
    },
    {
        type:"input",
        name:"installation",
        message:"What application(technology) do you install for this project?"
    },
    {
        type:"input",
        name:"usage",
        message:"What is this project used for?"
    },
    {
        type:"input",
        name:"contributors",
        message:"Please list any contributers for this project"
    },
    {
        type:"input",
        name:"tests",
        message:"Please list any tests"
    },
    {
        type:"input",
        name:"questions",
        message:"Please Enter your email address for questions"
    },
    {
        type:"checkbox",
        name:"licenses",
        message:"Please select one license for this project",
        choices:[
            "Apache",
            "MIT",
            "GPL",
            "Apache 2"
        ]
    },

];


let badgeLicense = "license"
function createBadge() {
    if( badgeLicense == 'MIT') {
        projectInfo.license = `![MIT License](https://img.shields.io/badge/license-MIT-green)`
    }else if( badgeLicense == 'Apache') {
        projectInfo.license = `![Apache License](https://img.shields.io/badge/license-Apache-blue)`
    }else if( badgeLicense == 'Apache 2') {
        projectInfo.license = `![Apache 2 License](https://img.shields.io/badge/license-Apache2-blue)`
    }else if( badgeLicense == 'GPL') {
        projectInfo.license = `![GPL License](https://img.shields.io/badge/license-GPL-blue)`
    }

}
createBadge()


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        if(err){
        return console.log("Something's wrong");
    }
    console.log("Successfully wrote:"+ fileName);
    })
        
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
    })
}

// function call to initialize program
init();
