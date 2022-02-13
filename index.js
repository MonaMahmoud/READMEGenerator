const inquirer = require('inquirer');
const fs = require('fs');
const markup = require("./generateMarkdown.js");

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is your project description?',
    },
    
    {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
    },
    {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'list',
        message: 'What is your project license?',
        name: 'license',
        choices: ['MIT', 'GPL', 'Apache'],
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What kind of tests your project have?',
    },
    {
    type: 'input',
    name: 'email',
    message: "What's your email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your github username",
        },
]);
};

// const generateREADME = ({ title, description, install, usage, credits, license }) =>
// `
// # ${title}

// ## Description

// ${description}

// ## Installation

// ${install}


// ## Usage
// ${usage}


// ## Credits
// ${credits}


// ## License
// ${license}


// ##Testing
// ${tests}


// `;


const init = () => {
promptUser()
    
    .then((answers) => fs.writeFileSync('ProREADME.md', markup.generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
