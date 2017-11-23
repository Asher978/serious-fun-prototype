const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
mongoose = require('mongoose'),
config = require('./db/config');
User = require('./api/models/User');
require('dotenv').config();

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to DB', config.database);
})
mongoose.connection.on('error', err => {
  console.log('Database error', err);
})

const app = express(),
server = require('http').Server(app),
port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Dont listen to my port ${port}`);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const userRoutes = require('./api/routes/userRoutes');
app.use('/user', userRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
})