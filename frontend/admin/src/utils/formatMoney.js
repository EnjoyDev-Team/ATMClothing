export const formatMoney = (str) => str.split('').reverse().reduce((prev, next, index) => ((index % 3) ? next : (`${next}.`)) + prev);
export const formatDotMoney = (str) => str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
