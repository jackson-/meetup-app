
const express = require('express');
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
// const env = require('dote nv').load();
const app = express();


// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Models
const models = require('./app/models');

// Sync Database
models.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine')
}).catch((err) => {
  console.log(err, 'Something went wrong with the Database Update!')
});
require('./app/config/passport/passport.js')(passport, models.user);

// Routes
app.use('/api', require('./app/api'))

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


app.listen(5000, (err) => {
  if (!err) {
    console.log('Site is live');
  } else console.log(err);
});
