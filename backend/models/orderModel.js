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
      type: Number,
      default: 0
    },
    address: {
      name: String,
      phone: String,
      address: String
    },
    paymentMethod: {
      type: Number,
      required: [true, 'The order must have a payment method']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to an user']
    },
    status: {
      type: Number,
      default: 0
    },
    totalPriceProduct: String,
    shipFee: String,
    totalPrice: String,
    products: [
      {
        idProduct: {
          type: mongoose.Schema.ObjectId,
          ref: 'products',
        },
        amount: {
          type: Number,
          required: [true, 'Must have the amount of product']
        },
        size: String,
        _id: false
      }
    ]
  }, 
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)


orderSchema.pre(/^findOne/, function(next) {

  this.populate({
    path: 'products.idProduct',
    select: 'name price img _id'
  });

  next();
})


const Order = mongoose.model('Order', orderSchema)

module.exports = Order;
