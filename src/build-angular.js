const { execSync } = require('child_process');

try {
  execSync('npx @angular/cli@15.0.0 build --configuration production', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during build:', error);
  process.exit(1);
}