const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user');
const wrapAsync = require('../utilities/wrapAsync');
const auth = require('../controllers/auth');

router.route('/register')
    .get(auth.registerForm)
    .post(wrapAsync(auth.registerUser));

router.route('/login')
    .get(auth.loginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', keepSessionInfo: true }), auth.loginUser);

router.get('/logout', auth.logout);

module.exports = router;