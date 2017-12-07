const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
logger = require('morgan'),
mongoose = require('mongoose'),
config = require('./db/config'),
User = require('./api/models/User'),
School = require('./api/models/Schools'),
Class = require('./api/models/Classes'),
HomePage = require('./api/models/HomePage'),
Page = require('./api/models/Page');
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
app.use(logger('dev'));

server.listen(port, () => {
  console.log(`Dont listen to my port ${port}`);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const userRoutes = require('./api/routes/userRoutes');
app.use('/user', userRoutes);

const schoolRoutes = require('./api/routes/schoolRoutes');
app.use('/schools', schoolRoutes);

const classesRoutes =  require('./api/routes/classRoutes');
app.use('/classes', classesRoutes);

const homePageRoutes = require('./api/routes/homePageRoutes');
app.use('/home_page', homePageRoutes);

const pageRoutes = require('./api/routes/pageRoutes');
app.use('/page', pageRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
})