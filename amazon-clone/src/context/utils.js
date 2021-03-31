export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => {
    total += parseFloat(item.price);
    return total;
  }, 0);
};
