const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
logger = require('morgan'),
mongoose = require('mongoose'),
config = require('./db/config'),
User = require('./api/models/User'),
School = require('./api/models/Schools'),
Class = require('./api/models/Classes'),
Page = require('./api/models/Page'),
Job = require('./api/models/Job'),
PagesSeed = require('./db/pagesSeed.json');
require('dotenv').config();

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to DB', config.database);
  Page.find({}, (err, pages)=> {
    if(pages.length<=0){
      let pagesArray = [];
        for(let page in PagesSeed){
          let { pageContent, pageTitle } = PagesSeed[page];
           PagesSeed[page].pageContent = JSON.stringify(pageContent);
          pagesArray.push(PagesSeed[page]);
        }
      Page.insertMany(pagesArray);
    }
  });
});
mongoose.connection.on('error', err => {
  console.log('Database error', err);
});

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

const pageRoutes = require('./api/routes/pageRoutes');
app.use('/page', pageRoutes);

const jobRoutes = require('./api/routes/jobRoutes');
app.use('/careers', jobRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
})