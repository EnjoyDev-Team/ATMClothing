
const statusEnum = [
  {
    "code": 0,
    "status": "Đang kiểm tra"
  },
  {
    "code": 1,
    "status": "Đã xác nhận"
  },
  {
    "code": 2,
    "status": "Đang giao hàng"
  },
  {
    "code": 3,
    "status": "Chờ nhận hàng"
  },
  {
    "code": 4,
    "status": "Đã nhận hàng"
  },
  {
    "code": 5,
    "status": "Đã hủy"
  },
]

const paymentEnum = [
  {
    "code": 0,
    "payment": "Thanh toán khi nhận hàng"
  },
  {
    "code": 1,
    "payment": "Thanh toán qua Momo"
  }
]

const receiveEnum = [
  {
    "code": 0,
    "receive": 'Giao hàng'
  },
  {
    "code": 1,
    "receive": 'Nhận hàng tại trụ sở'
  }
]

module.exports = { statusEnum, paymentEnum, receiveEnum }