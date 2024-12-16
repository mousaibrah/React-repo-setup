#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const projectName = process.argv[2] || 'my-project';
const targetDir = path.join(process.cwd(), projectName);

console.log(`Creating project in ${targetDir}...`);
execSync(`cp -r ${__dirname}/template ${targetDir}`);
console.log(`Project created. Navigate to ${projectName} and run 'yarn install'.`);
