// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Memes}
  [![License: ${data.License}](https://img.shields.io/badge/License-${data.License}-yellow.svg)](https://opensource.org/licenses/${data.License})
  
  ## Table Of Contents
  1. [Project Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributors](#Contributors)
  6. [Tests](#Tests)
  7. [Questions](#Questions) 

  ## Project Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributors
  ${data.Contributors}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}
  
  ###### Contact Me
  * GitHub Profile: https://github.com/${data.Username}
  * Email Address: ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;
  