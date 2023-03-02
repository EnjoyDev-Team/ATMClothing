export const formatMoney = (str) => str.split('').reverse().reduce((prev, next, idx) => ((idx % 3)
  ? next : (`${next}.`)) + prev);
