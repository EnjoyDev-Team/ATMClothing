// review / rating / creatAt / ref to tour / ref to user
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    IdOrder: String,
    remindName: String,
    createAt: {
      type: Date,
      default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }),
    },
    receiveMethod: {
      type: String,
      enum: ['Giao hàng', 'Nhận hàng tại trụ sở'],
      default: 'Giao hàng'
    },
    address: {
      name: String,
      phone: String,
      address: String
    },
    paymentMethod: {
      type: String,
      enum: ['Thanh toán khi nhận hàng', 'Thanh toán Momo'],
      required: [true, 'The order must have a payment method']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to an user']
    },
    status: {
      type: String,
      enum: ['Đang kiểm tra', 'Đã xác nhận', 'Đang giao hàng', 'Chờ nhận hàng', 'Đã nhận hàng', 'Đã hủy'],
      default: 'Đang kiểm tra'
    },
    totalPriceProduct: String,
    shipFee: String,
    totalPrice: String,
    products: [
      {
        detail: {
          type: mongoose.Schema.ObjectId,
          ref: 'products',
        },
        amount: {
          type: Number,
          required: [true, 'Must have the amount of product']
        },
        size: String
      }
    ]
  }, 
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)


reviewSchema.pre(/^find/, function(next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name'
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // });

  this.populate({
    path: 'products.products',
    select: 'name price img'
  });

  next();
})

reviewSchema.statics.calcAverageRatings = async function(tourId) {
 const stats = await this.aggregate([
    {
      $match: {tour: tourId}
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);
  // console.log(stats);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating
    })
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5
    })
  }
}

reviewSchema.post('save', function() {
  // this points to current review
  this.constructor.calcAverageRatings(this.tour)
})

reviewSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next()
})

reviewSchema.post(/^findOneAnd/, async function() {
  // this.r = await this.findOne(); does NOT work here has already axecuted
  await this.r.constructor.calcAverageRatings(this.r.tour)
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;
