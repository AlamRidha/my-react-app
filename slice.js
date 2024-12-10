import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    loginUser(state, action) {
      state.status = true;
    },
  },
});

// membuat store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});
console.log("Oncreate Store", store.getState());

// subscribe  -> mengecek perubahan yang terjadi didalam state
store.subscribe(() => {
  console.log("Store Change", store.getState());
});

// action, aksi ketika dilakukan
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 30 }));
store.dispatch(loginSlice.actions.loginUser());
