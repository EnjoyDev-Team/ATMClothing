import { customAlphabet } from 'nanoid';

export const OrderIDGenerator = () => {
  const nanoid1 = customAlphabet('1234567890', 10);
  const firstID = nanoid1(7);

  const nanoid2 = customAlphabet('ABCDEFGHJKLMNOPQRSTUVWXYZ', 10);
  const secondID = nanoid2(7);

  return `${firstID}${secondID}`;
};
