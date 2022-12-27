import { atom, selector } from 'recoil';

export const paymentRecoil = atom({
  key: 'paymentRecoil',
  default: {
    quantity: 0,
    price: 0,
    ship: 20000,
    discount: 0
  },
});

export const addressRecoil = atom({
  key: 'addressRecoil',
  default: {
    name: '',
    phone: '',
    street: '',
    ward: '',
    district: '',
    city: '',
  },
});

export const paymentMethodRecoil = atom({
  key: 'paymentMethodRecoil',
  default: 0,
});

export const productsPaymentRecoil = atom({
  key: 'productsPaymentRecoil',
  default: [],
});

export const noteRecoil = atom({
  key: 'noteRecoil',
  default: ''
});

export const getTotalPaymentRecoil = selector({
  key: 'getTotalPaymentRecoil',

  get: ({ get }) => {
    const current = get(paymentRecoil);

    const total = current.price + current.ship - current.discount;

    return {
      total
    };
  },
});
