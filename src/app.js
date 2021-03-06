const express = require('express');
// const favicon = require("serve-favicon");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const helpers = require('./views/helpers/index');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));
app.use(controllers);

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers,
    defaultLayout: 'main',
  }),
);

module.exports = app;
