#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const inquirer = require('inquirer');

// Define the paths to the React and Next.js templates
const templates = {
  react: path.join(__dirname, 'template-react'),
  next: path.join(__dirname, 'template-next')
};

// Prompt the user for setup choice
inquirer.prompt([
  {
    type: 'list',
    name: 'framework',
    message: 'Choose the setup you want to use:',
    choices: ['React', 'Next.js']
  }
]).then(answers => {
  const projectName = process.argv[2] || 'my-project';
  const targetDir = path.join(process.cwd(), projectName);
  const selectedTemplate = answers.framework.toLowerCase();  // 'react' or 'next'

  console.log(`Creating ${selectedTemplate} project in ${targetDir}...`);

  // Check if the selected template exists
  if (!templates[selectedTemplate]) {
    console.error(`Template for ${selectedTemplate} not found!`);
    return;
  }

  // Copy the selected template to the target directory
  execSync(`cp -r ${templates[selectedTemplate]} ${targetDir}`);
  
  // Provide post-setup instructions
  console.log(`Project created. Navigate to ${projectName} and run 'yarn install' or 'npm install'.`);
}).catch(err => {
  console.error('Error during setup:', err);
});
