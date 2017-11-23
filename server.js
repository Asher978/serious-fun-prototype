const express = require('express'),
bodyParser = require('body-parser'),
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
port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Dont listen to my port ${port}`);
});

app.get('/', (req,res) => {
  res.send('hello world');
});

const userRoutes = require('./api/routes/userRoutes');
app.use('/user',userRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
})