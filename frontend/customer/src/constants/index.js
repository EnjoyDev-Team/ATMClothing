export const AppFlowActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_COMPLETE: 'LOGIN_COMPLETE',

  GET_ALL_DATA_REQUEST: 'GET_ALL_DATA_REQUEST',
  GET_ALL_DATA_COMPLETE: 'GET_ALL_DATA_COMPLETE',
};

export const EMITTER_CONSTANTS = {
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
};

export const STATUS_ORDER_PRODUCT = [
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
