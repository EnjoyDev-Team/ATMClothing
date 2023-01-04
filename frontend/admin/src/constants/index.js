export const ORDER_STATUS_ENUM = [
  {
    label: 'Đang kiểm tra',
    code: 0,
    style: 'waiting'
  },
  {
    label: 'Đã xác nhận',
    code: 1,
    style: 'confirmed'
  },
  {
    label: 'Chờ nhận hàng',
    code: 3,
    style: 'receiving'
  },
  {
    label: 'Đã nhận hàng',
    code: 4,
    style: 'success'
  },
  {
    label: 'Đã hủy',
    code: 5,
    style: 'canceled'
  }
];

export const ORDER_STATUS_ENUM_DELIVIRY = [
  {
    label: 'Đang kiểm tra',
    code: 0,
    style: 'waiting'
  },
  {
    label: 'Đã xác nhận',
    code: 1,
    style: 'confirmed'
  },
  {
    label: 'Đang giao hàng',
    code: 2,
    style: 'delivery'
  },
  {
    label: 'Đã nhận hàng',
    code: 4,
    style: 'success'
  },
  {
    label: 'Đã hủy',
    code: 5,
    style: 'canceled'
  }
];

export const SERVICE_STATUS_ENUM = [
  {
    label: 'Đang kiểm tra',
    code: 0,
    style: 'waiting'
  },
  {
    label: 'Chờ nhận hàng',
    code: 1,
    style: 'receiving'
  },
  {
    label: 'Đã hoàn thành',
    code: 2,
    style: 'success'
  },
  {
    label: 'Đã hủy',
    code: 3,
    style: 'canceled'
  }
];

export const IDX_SERVICE_STATUS_ENUM = {
  'Đang kiểm tra': 0,
  'Chờ nhận hàng': 1,
  'Đã hoàn thành': 2,
  'Đã hủy': 3
};
