#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('Starting build process...');

try {
  // Change to the frontend directory
  process.chdir(__dirname);
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run vite build using node directly
  console.log('Building with Vite...');
  execSync('node node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
