import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const url =
  "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const changeAmount = (id, value) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      payload: { id: id, value: value },
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase: (id) => changeAmount(id, 1),
        decrease: (id) => changeAmount(id, -1),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
