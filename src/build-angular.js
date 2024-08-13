// build-angular.js
const { execSync } = require('child_process');

try {
  execSync('npx ng build --configuration production', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during build:', error);
  process.exit(1);
}