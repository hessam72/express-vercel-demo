// server.js
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', apiRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
