const { execSync } = require('child_process');

try {
  execSync('npx ng build --aot --configuration production', { stdio: 'inherit' });
  console.log('Angular build completed successfully.');
} catch (error) {
  console.error('Error during Angular build:', error);
  process.exit(1);
}
