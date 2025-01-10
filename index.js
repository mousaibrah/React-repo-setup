#!/usr/bin/env node

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const fsExtra = require('fs-extra'); // Ensure this is added to your dependencies

// Define the paths to the React and Next.js templates
const templates = {
    react: path.join(__dirname, 'template-react'),
    next: path.join(__dirname, 'template-next'),
};

// Prompt the user for setup choice
async function setupProject() {
    try {
        // Ask for the project name if not provided as a command line argument
        const projectNameArg = process.argv[2];

        // If no project name is passed, ask for it interactively
        const { projectName } = await inquirer?.default.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter the project name:',
                default: projectNameArg || 'my-project'
            }
        ]);

        // Ask the user for the framework setup (React or Next)
        const answers = await inquirer?.default.prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'Choose the setup you want to use:',
                choices: ['React', 'Next']
            }
        ]);

        const targetDir = path.join(process.cwd(), projectName);
        const selectedTemplate = answers.framework.toLowerCase();  // 'react' or 'next'

        console.log(`Creating ${selectedTemplate} project in ${targetDir}...`);

        // Check if the selected template exists
        if (!templates[selectedTemplate]) {
            console.error(`Template for ${selectedTemplate} not found!`);
            return;
        }

        // Copy the selected template to the target directory
        await fsExtra.copy(templates[selectedTemplate], targetDir);
        console.log(`Template files copied successfully.`);

        // Update the package.json file
        const packageJsonPath = path.join(targetDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            packageJson.name = projectName; // Update the name
            fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        } else {
            console.error('package.json not found in the template!');
        }

        // Provide post-setup instructions
        console.log(`Project created. Navigate to ${projectName} and run 'yarn install' or 'npm install'.`);
    } catch (error) {
        console.error('Error during setup:', error);
    }
}

// Call the function to start the setup process
setupProject();
