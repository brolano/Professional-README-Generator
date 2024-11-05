// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from "fs"; 
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',        
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'name',        
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Github',        
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',        
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'description',        
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to the project?'
    },
    {
        type: 'list',
        name: 'license',        
        message: 'What kind of license should the project have?',
        choices: ['MIT','Apache 2.0','GPL 3.0','None'],
    }
];


// TODO: Create a function to write README file
function writeToReadMe(answers) {
    const markdown = generateMarkdown(answers);

    fs.writeFile('README.md', markdown, (err) =>
        err ? console.log(err) : console.log('README.md created successfully!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToReadMe(answers))
}

// Function call to initialize app
init();
