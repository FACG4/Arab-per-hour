
const express = require('express');

const router = express.Router();


const home = require('./home');

router.get('/', home.get);
router.post('/', home.post);



const expressValidator = require('express-validator');
router.use(expressValidator())
const signup = require('./signup');
router.get('/signup',signup.get);
router.post('/signup',signup.post);

module.exports= router;
