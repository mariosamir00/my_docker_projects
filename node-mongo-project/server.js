const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// This is the connection string to our MongoDB
// 'db' is the name we will give our database service in Docker Compose
const MONGO_URI = 'mongodb://db:27017/mydatabase';

mongoose.connect(MONGO_URI)
  .then(() => console.log('SUCCESS: MongoDB Connected!'))
  .catch(err => console.log('ERROR: Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello World! This is my Node.js app, connected to MongoDB.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});