const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist/path-to-ciso')); // Serve your Angular app

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/path-to-ciso/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
