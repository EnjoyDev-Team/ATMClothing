const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
  {
    createAt: {
      type: Date,
      default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }),
    },
    idUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to an user']
    },
    idProduct: {
      type: mongoose.Schema.ObjectId,
      ref: 'products',
      required: [true, 'Review must belong to an user']
    },
    quality: Number,
    size: String
  }, 
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)


cartSchema.pre(/^find/, function(next) {

  this.populate({
    path: 'idProduct',
    select: 'name price amount facility img _id'
  });

  next();
})


const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart;
