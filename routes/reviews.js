const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utilities/wrapAsync');
const { reviewSchema } = require('../schemas.js');
const ExpressError = require('../utilities/ExpressError');
const Campground = require('../models/campground');
const Review = require('../models/reviews');
const reviews = require('../controllers/reviews');
const { validateReview, loggedIn, verifyRAuthor } = require('../middleware');

router.post('/', loggedIn, validateReview, wrapAsync(reviews.createReview));

router.delete('/:reviewId', loggedIn, verifyRAuthor, wrapAsync(reviews.deleteReview));

module.exports = router;