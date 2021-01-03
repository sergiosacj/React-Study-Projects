export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };

    case "CHANGE_AMOUNT":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          return cartItem.id === action.payload.id
            ? {
                ...cartItem,
                amount:
                  cartItem.amount + action.payload.value < 0
                    ? 0
                    : cartItem.amount + action.payload.value,
              }
            : cartItem;
        }),
      };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    default:
      return state;
  }
};
