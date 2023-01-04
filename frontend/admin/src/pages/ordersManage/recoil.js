import { atom } from 'recoil';

export const reloadOrderRecoil = atom({
  key: 'reloadOrderRecoil',
  default: true,
});

export const cancelRecoil = atom({
  key: 'cancelRecoil',
  default: '',
});
