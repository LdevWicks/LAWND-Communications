// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/path-to-ciso')));

// For all GET requests, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/path-to-ciso/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
