const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('dist/path-to-ciso'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/path-to-ciso/index.html');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// Handle 404 for all other routes
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
