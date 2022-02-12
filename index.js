const inquirer = require('inquirer');
const fs = require('fs');

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
    type: 'input',
    name: 'license',
    message: 'What kind of license your project have?',
    },
]);
};

const generateREADME = ({ title, description, install, usage, credits, license }) =>
`
# ${title}

## Description

${description}

## Installation

${install}


## Usage
${usage}


## Credits
${credits}


## License
${license}


`;


const init = () => {
promptUser()
    
    .then((answers) => fs.writeFileSync('ProREADME.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
