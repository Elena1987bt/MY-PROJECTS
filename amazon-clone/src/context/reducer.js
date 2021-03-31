export const reducer = (state, action) => {
  // console.log(action);
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, payload] };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((el) => (el.id = payload));
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product as its not in the basket`);
      }

      return { ...state, basket: newBasket };
    case 'SET_USER':
      return { ...state, user: payload };
    default:
      return state;
  }
};
