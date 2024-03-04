const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes for the HTML files
app.get('/ap_myself.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ap_myself.html'));
});

app.get('/ap_myskills.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ap_myskills.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});