const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// serves static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// add API routes here 
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// sends requests to react if no routes match (keep at very end)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

