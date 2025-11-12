import { createSlice, configureStore, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch all categories
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("http://localhost:8080/api/products");
  return response.data;
});
const productSlice = createSlice({
  name: "products",
  initialState: {
    vegItems: [],
    nonVegItems: [],
    chocolateItems: [],
    bakeryItems: [],
    milkItems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;

        // Divide products by category
        state.vegItems = data.filter((p) => p.category.toLowerCase() === "veg");
        state.nonVegItems = data.filter(
          (p) => p.category.toLowerCase() === "non-veg"
        );
        state.bakeryItems = data.filter(
          (p) => p.category.toLowerCase() === "bakery"
        );
        state.milkItems = data.filter(
          (p) => p.category.toLowerCase() === "milk"
        );
        state.bakeryItems = data.filter(
          (p) => p.category && p.category.toLowerCase() === "bakery"
        );
        state.chocolateItems = data.filter(
          (p) => p.category.toLowerCase() === "chocolate"
        ); //
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


//get the localstorage data and assign to initialState
const authData = JSON.parse(localStorage.getItem("authentication"));
const currentUser = authData?.currentUser?.userName;
const initialState =
  JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    loadCart: (state, action) => {
      return action.payload; // replace current state with saved cart
    },
    addToCart: (state, action) => {
      let item = state.find((state) => state.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex != -1) {
        state.splice(itemIndex, 1);
      }
    },
    incQuantity: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decQuantity: (state, action) => {
      let item = state.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((i) => i.id !== action.payload.id);
      }
    },
    clearCart: () => [],
  },
});

export let { addToCart, removeFromCart, incQuantity, decQuantity,clearCart,loadCart } = cartSlice.actions;

//get the localstorage data and assign to initialState
const savedOrder = JSON.parse(localStorage.getItem("orders"))||[]
let ordersSlice = createSlice({
  name: "orders",
  initialState: savedOrder,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  } 
});
export let { addOrder } = ordersSlice.actions;


let savedAuth = JSON.parse(localStorage.getItem("authentication"));
//authenticationSlice
let authSlice = createSlice({
  name: "authentication",
  initialState: savedAuth || {
    users: [],
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { userName, password } = action.payload;
      let user = state.users.find(
        (user) => user.userName === userName && user.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});
export let { registerUser, loginUser,logoutUser } = authSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    authentication: authSlice.reducer,
  },
});


// ✅ Save cart per user
store.subscribe(() => {
  const state = store.getState();
  const userName = state.authentication?.currentUser?.userName;
  if (userName) {
    localStorage.setItem(`cart_${userName}`, JSON.stringify(state.cart));
  }
});



// ✅ Save authentication state on every change
store.subscribe(() => {
  localStorage.setItem(
    "authentication",
    JSON.stringify(store.getState().authentication)
  );
});
// ✅ Save Orders state on every change
store.subscribe(() => {
  localStorage.setItem("orders", JSON.stringify(store.getState().orders));
})

export default store;
