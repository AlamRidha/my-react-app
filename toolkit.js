import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

// action bisa buat diawal
const addToCart = createAction("ADD_TO_CART");

// membuat reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginUser = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(loginUser, (state, action) => {
    state.status = true;
  });
});

// membuat store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("Oncreate Store", store.getState());

// subscribe  -> mengecek perubahan yang terjadi didalam state
store.subscribe(() => {
  console.log("Store Change", store.getState());
});

// action, aksi ketika dilakukan
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 30 }));
store.dispatch(loginUser());
