const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('file-system');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const userController = require('./user/userController');
const messageController = require('./message/messageController');
const PORT = 3000;
app = express();

mongoose.connect(
  'mongodb+srv://nathan:nathan123@cluster0-ciwcz.mongodb.net/chatdb?retryWrites=true',
  { userNewUrlParser: true },
  (err, db) => {
    if (err) throw err;
    console.log('Mongoose is connected!');
  }
);

// parses all request body into json; parses url encoded text; allows app to serve static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'), err => {
    if (err) throw err;
  });
});

// app.post into server at route /login and then query database for

app.get('/styles.css', (req, res) => {
  res
    .set('Content-Type', 'text/css; charset=UTF-8')
    .sendFile(path.resolve(__dirname, '../styles.css'), err => {
      if (err) throw err;
    });
});

app.post('/login', userController.createUser);

app.get('/messages', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'), err => {
    if (err) throw err;
  });
});

app.listen(PORT, () => console.log(`You're listening on ${PORT}...`));
