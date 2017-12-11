const mongoose = require('mongoose');

const Review = mongoose.model('Review');

const reviewController = {
  getAll : (req,res) => {
    Review.find({}, (err, reviews) =>{
        res.send({
            "message": "ok",
            reviews
        });
    });
  },
  addReview : (req,res) => {
    let { quote, reviewer, typeOfR  } = req.body,
    newReview = new Review({ quote, reviewer, typeOfR});

    newReview.save((err, review) => {
        console.log(review)
        res.send({
            "message" : "ok",
            review
        });
    });

  },
  removeReview : (req,res) => {
    Review.findByIdAndRemove(req.params.reviewId, (err, review) =>{
        res.send({
            'message' : 'review was deleted',
            review
        });
    });
  }
}

module.exports = reviewController;