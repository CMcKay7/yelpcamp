const User = require('../models/user');

module.exports.registerForm = (req, res) => {
    res.render('users/register');
};

module.exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const registered = await User.register(user, password);
        req.login(registered, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to YelpCamp!');
            res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
};

module.exports.loginForm = (req, res) => {
    res.render('users/login')
};

module.exports.loginUser = (req, res) => {
    req.flash('success', 'Welcome Back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Successfully logged out!');
        res.redirect('/campgrounds');
    })
};