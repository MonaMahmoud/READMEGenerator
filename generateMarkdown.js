// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge;
  switch(license) {
    case "MIT":
      badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
      case "GPL":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let link;
  switch(license) {
    case "MIT":
      link="https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
      case "GPL":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      link = "";
  }
  return link;


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  return `# ${data.title}


  ${badge}

## Description

${data.description}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${data.install}


## Usage
${data.usage}


## Credits
${data.credits}


## License
This application is covered with licence type: ${data.license}. More info can be found here: [${data.license}](${link})


## Testing
${data.tests}


## Questions

Check my Github account: [http://github.com/${data.github}](http://github.com/${data.github}) for more info and if you have any questions send me an email at:  [${data.email}](mailto:${data.email}))

`;
}

module.exports = {generateMarkdown};
