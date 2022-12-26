// review / rating / creatAt / ref to tour / ref to user
const mongoose = require('mongoose')
const User = require('./userModel')

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
      street: String,
      ward: String,
      district: String,
      city: String,
    },
    paymentMethod: {
      type: Number,
      required: [true, 'The order must have a payment method']
    },
    idUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to an user']
    },
    status: {
      type: Number,
      default: 0
    },
    note: String,
    totalPriceProduct: String,
    shipFee: String,
    discount: String,
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


orderSchema.statics.calcTotal = async function(userId, totalPriceProduct) {
  const user = await User.findOne({_id:userId});
  
  const nOrders = user.nOrders + +totalPriceProduct.replaceAll('.', '')
  
  await User.findByIdAndUpdate(userId, {
    nOrders,
  })
 }

orderSchema.post('save', function() {
  this.constructor.calcTotal(this.idUser, this.totalPriceProduct)
})

orderSchema.pre(/^findOne/, function(next) {

  this.populate({
    path: 'products.idProduct',
    select: 'name price img _id facility amount'
  });

  this.populate({
    path: 'idUser',
    select: 'name phone _id'
  });

  next();
})


const Order = mongoose.model('Order', orderSchema)

module.exports = Order;
