import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 20,
      },
    ],
  },
  action
) => {
  // action type ini adalah untuk mengecek actionnya
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], //payload untuk datanya
      };
    default:
      return state;
  }
};

// store -> menyimpan data kedalam store
const store = legacy_createStore(cartReducer);
console.log("Oncreate store:  ", store.getState());

// subscribe  -> mengecek perubahan yang terjadi didalam state
store.subscribe(() => {
  console.log("Store Change", store.getState());
});

// dispatch -> aksi/ event handler nya
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
