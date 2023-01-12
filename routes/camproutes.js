const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const wrapAsync = require('../utilities/wrapAsync');
const { campgroundSchema, reviewSchema } = require('../schemas.js');
const ExpressError = require('../utilities/ExpressError');
const Campground = require('../models/campground');
const user = require('../models/user');
const { loggedIn, verifyAuthor, validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(wrapAsync(campgrounds.index))
    .post(loggedIn, upload.array('image'), validateCampground, wrapAsync(campgrounds.createCampground));

router.get('/new', loggedIn, campgrounds.newForm);

router.route('/:id')
    .get(wrapAsync(campgrounds.showCampground))
    .put(loggedIn, verifyAuthor, upload.array('image'), validateCampground, wrapAsync(campgrounds.updateCampground))
    .delete(loggedIn, verifyAuthor, wrapAsync(campgrounds.deleteCampground));

router.get('/:id/edit', loggedIn, verifyAuthor, wrapAsync(campgrounds.editForm));

module.exports = router;