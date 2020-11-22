// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [Licenses](#licenses)

## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributors:
${data.contributors}
## Tests:
${data.tests}
## Questions:
If you have any question, Please contact me:${data.questions}
## Licenses:
${data.licenses}

`;
}

module.exports = generateMarkdown;
