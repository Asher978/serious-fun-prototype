const reviewRouter = require('express').Router(),
    reviewController = require('./../controllers/reviewController');

reviewRouter.get('/', reviewController.getAll);
reviewRouter.post('/', reviewController.addReview);
reviewRouter.delete('/:reviewId', reviewController.removeReview);

module.exports = reviewRouter;