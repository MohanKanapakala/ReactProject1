import { createSlice, configureStore, current } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    vegItems: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        price: 180,
        description:
          "Soft paneer cubes cooked in creamy tomato gravy with butter.",
        imgUrl: "/images/paneer-butter.png",
      },
      {
        id: 2,
        name: "Veg Biryani",
        price: 150,
        description:
          "Fragrant basmati rice cooked with mixed vegetables and spices.",
        imgUrl: "/images/veg-biryani.png",
      },
      {
        id: 3,
        name: "Aloo Gobi",
        price: 120,
        description:
          "Potato and cauliflower cooked with onions, tomatoes, and spices.",
        imgUrl: "/images/aloo-gobi.webp",
      },
      {
        id: 4,
        name: "Dal Tadka",
        price: 100,
        description: "Yellow lentils tempered with ghee, garlic, and spices.",
        imgUrl: "/images/dal-tadka.png",
      },
      {
        id: 5,
        name: "Veg Pulao",
        price: 130,
        description: "Aromatic rice cooked with fresh seasonal vegetables.",
        imgUrl: "/images/veg-pulao.png",
      },
      {
        id: 7,
        name: "Masala Dosa",
        price: 90,
        description: "Crispy rice dosa filled with spicy potato masala.",
        imgUrl: "/images/masala-dosa.png",
      },
      {
        id: 8,
        name: "Palak Paneer",
        price: 170,
        description: "Paneer cubes simmered in creamy spinach gravy.",
        imgUrl: "/images/palak-paneer.webp",
      },
      {
        id: 9,
        name: "Mushroom Curry",
        price: 140,
        description: "Fresh mushrooms cooked with onion-tomato masala.",
        imgUrl: "/images/mushroom2.png",
      },
      {
        id: 10,
        name: "Vegetable Manchurian",
        price: 150,
        description: "Crispy veggie balls in tangy Indo-Chinese sauce.",
        imgUrl: "/images/veg munchuria.png",
      },

      {
        id: 11,
        name: "Kadai Paneer",
        price: 175,
        description: "Paneer cubes cooked with capsicum and spicy masala.",
        imgUrl: "/images/kadai-paneer.png",
      },
      {
        id: 12,
        name: "Noodles",
        price: 60,
        description:
          "Stir-fried strands tossed with veggies and flavors for a quick, tasty bite.",
        imgUrl: "/images/noodles.png",
      },
    ],
    nonVegItems: [
      {
        id: 201,
        name: "Chicken Biryani",
        price: 220,
        description:
          "Aromatic basmati rice cooked with tender chicken and spices.",
        imgUrl: "/images/chicken-biryani.png",
      },
      {
        id: 202,
        name: "Mutton Curry",
        price: 300,
        description: "Slow-cooked mutton in a rich and spicy curry.",
        imgUrl: "/images/mutton-curry.png",
      },
      {
        id: 203,
        name: "Fish Fry",
        price: 180,
        description: "Crispy fried fish marinated with South Indian spices.",
        imgUrl: "/images/fish curry.png",
      },
      {
        id: 204,
        name: "Prawn Masala",
        price: 250,
        description: "Juicy prawns cooked in spicy onion-tomato gravy.",
        imgUrl: "/images/prawn-masala.png",
      },
      {
        id: 205,
        name: "Chicken 65",
        price: 160,
        description:
          "Crispy fried chicken bites tossed with curry leaves and chilies.",
        imgUrl: "/images/65.png",
      },
      {
        id: 206,
        name: "Egg Curry",
        price: 120,
        description: "Boiled eggs cooked in a spicy and tangy curry",
        imgUrl: "/images/egg.png",
      },
      {
        id: 207,
        name: "Grilled Chicken",
        price: 280,
        description:
          "Tender chicken marinated with herbs and grilled to perfection.",
        imgUrl: "/images/grilled.webp",
      },
      {
        id: 208,
        name: "Butter Chicken",
        price: 270,
        description: "Boneless chicken cooked in creamy tomato butter gravy.",
        imgUrl: "/images/butter-chicken.webp",
      },
      {
        id: 209,
        name: "Tandoori Chicken",
        price: 240,
        description:
          "Chicken marinated in yogurt and spices, roasted in tandoor.",
        imgUrl: "/images/tandoori.webp",
      },
      {
        id: 210,
        name: "Mutton Biryani",
        price: 320,
        description: "Flavorful basmati rice cooked with tender mutton pieces.",
        imgUrl: "/images/mutton biryani.webp",
      },
      {
        id: 211,
        name: "Fish Curry",
        price: 200,
        description:
          "Fresh fish simmered in tangy and spicy coconut-based curry.",
        imgUrl: "/images/fish.png",
      },
      {
        id: 212,
        name: "Prawn Biryani",
        price: 280,
        description:
          "Aromatic basmati rice layered with juicy prawns and spices.",
        imgUrl: "/images/prawn-biryani.png",
      },
    ],
    milkItems: [
      {
        id: 301,
        name: "Fresh Cow Milk",
        price: 28,
        description: "Pure and fresh cow milk rich in calcium and protein.",
        imgUrl: "/images/milk1.png",
      },
      {
        id: 302,
        name: "Flavored Milk (Chocolate)",
        price: 40,
        description: "Delicious chocolate-flavored milk drink.",
        imgUrl: "/images/milk-2.png",
      },
      {
        id: 303,
        name: "Flavored Milk (Strawberry)",
        price: 40,
        description: "Refreshing strawberry-flavored milk drink.",
        imgUrl: "/images/strawberry-milk.jpg",
      },
      {
        id: 304,
        name: "Badam Milk",
        price: 50,
        description: "Milk enriched with almonds and cardamom.",
        imgUrl: "/images/milk-3.png",
      },
      {
        id: 305,
        name: "Sweet Lassi",
        price: 45,
        description: "Refreshing yogurt-based sweet lassi.",
        imgUrl: "/images/sweet-lassi.jpg",
      },
      {
        id: 306,
        name: "Salt Lassi",
        price: 40,
        description: "Traditional salty lassi with a tangy taste.",
        imgUrl: "/images/milk-4.png",
      },
      {
        id: 307,
        name: "Mango Lassi",
        price: 55,
        description: "Delicious blend of yogurt and mango pulp.",
        imgUrl: "/images/milk-5.png",
      },
      {
        id: 308,
        name: "Buttermilk (Chaas)",
        price: 20,
        description: "Cool and refreshing spiced buttermilk.",
        imgUrl: "/images/buttermilk.jpg",
      },
      {
        id: 309,
        name: "Milkshake (Vanilla)",
        price: 60,
        description: "Creamy vanilla milkshake made with pure milk.",
        imgUrl: "/images/milk-6.png",
      },
      {
        id: 310,
        name: "Milkshake (Oreo)",
        price: 70,
        description: "Thick and delicious Oreo milkshake.",
        imgUrl: "/images/milk-7.png",
      },
    ],
    chocolateItems: [
      {
        id: 401,
        name: "Cadbury Dairy Milk",
        price: 40,
        description: "Classic creamy milk chocolate, most loved in India.",
        imgUrl: "/images/chh1.png",
      },
      {
        id: 402,
        name: "Cadbury Dairy Milk Silk",
        price: 80,
        description: "Rich, smooth, and extra creamy chocolate bar.",
        imgUrl: "/images/choo1.png",
      },
      {
        id: 403,
        name: "5 Star",
        price: 20,
        description: "Chewy caramel-filled chocolate bar from Cadbury.",
        imgUrl: "/images/cho1.png",
      },
      {
        id: 404,
        name: "Perk",
        price: 10,
        description: "Crispy wafer coated with chocolate by Cadbury.",
        imgUrl: "/images/ch4.png",
      },
      {
        id: 405,
        name: "Munch",
        price: 10,
        description: "Nestlé’s crunchy wafer with chocolate coating.",
        imgUrl: "/images/ch5.png",
      },
      {
        id: 406,
        name: "KitKat",
        price: 30,
        description: "Nestlé’s crispy wafer fingers covered with chocolate.",
        imgUrl: "/images/ch6.png",
      },
      {
        id: 407,
        name: "Bar One",
        price: 25,
        description: "Nestlé’s nougat and caramel filled chocolate bar.",
        imgUrl: "/images/ch7.png",
      },

      {
        id: 409,
        name: "Amul Fruit & Nut",
        price: 120,
        description: "Delicious chocolate with dry fruits and nuts.",
        imgUrl: "/images/ch8.png",
      },
      {
        id: 410,
        name: "Campco Chocolate",
        price: 50,
        description: "South Indian cooperative brand chocolate.",
        imgUrl: "/images/ch9.png",
      },

      {
        id: 411,
        name: "LuvIt ChocWich",
        price: 30,
        description: "Modern Indian brand with creamy chocolate wafers.",
        imgUrl: "/images/ch10.png",
      },
    ],
    bakeryItems: [
      {
        id: 601,
        name: "Margherita Pizza",
        price: 250,
        description: "Classic pizza with mozzarella cheese and fresh basil.",
        imgUrl: "/images/bak1.png",
      },
      {
        id: 602,
        name: "Veggie Burger",
        price: 140,
        description:
          "Crispy veg patty with lettuce, tomato, and mayo in a soft bun.",
        imgUrl: "/images/veg-burger.png",
      },
      {
        id: 603,
        name: "Chicken Roll",
        price: 160,
        description: "Stuffed chicken roll with spicy masala and onions.",
        imgUrl: "/images/chicken-roll.webp",
      },
      {
        id: 604,
        name: "Paneer Sandwich",
        price: 120,
        description: "Grilled sandwich filled with spiced paneer and veggies.",
        imgUrl: "/images/paneer-sandwich.png",
      },
      {
        id: 605,
        name: "French Fries",
        price: 90,
        description: "Golden crispy fries served with ketchup.",
        imgUrl: "/images/french-fri.png",
      },
      {
        id: 606,
        name: "Veg Puff",
        price: 60,
        description: "Flaky puff pastry stuffed with spiced vegetables.",
        imgUrl: "/images/veg-puff.png",
      },
      {
        id: 607,
        name: "Chicken Pizza",
        price: 320,
        description: "Cheesy pizza topped with spicy chicken and onions.",
        imgUrl: "/images/chicken-pizza.png",
      },
      {
        id: 608,
        name: "Egg Puff",
        price: 70,
        description: "Baked puff pastry filled with seasoned boiled egg.",
        imgUrl: "/images/egg-puff.png",
      },
      {
        id: 609,
        name: "Veg Cheese Sandwich",
        price: 110,
        description:
          "Fresh sandwich with cheese, cucumber, tomato, and lettuce.",
        imgUrl: "/images/bk-9.png",
      },
      {
        id: 610,
        name: "Paneer Roll",
        price: 150,
        description: "Soft wrap stuffed with paneer tikka and fresh veggies.",
        imgUrl: "/images/bk-10.webp",
      },
      {
        id: 612,
        name: "Cheese Burger",
        price: 160,
        description: "Juicy burger loaded with melted cheese and sauces.",
        imgUrl: "/images/bk-11.png",
      },
      {
        id: 613,
        name: "Chicken Puff",
        price: 80,
        description: "Crispy puff stuffed with spicy chicken filling.",
        imgUrl: "/images/bk-12.png",
      },
      {
        id: 614,
        name: "Veg Spring Roll",
        price: 100,
        description:
          "Crispy fried spring rolls filled with noodles and veggies.",
        imgUrl: "/images/bk-13.png",
      },
      {
        id: 615,
        name: "Samosa",
        price: 25,
        description:
          "A crispy golden pastry filled with spiced potato and peas, perfect for snacking.",
        imgUrl: "/images/samosa1.png",
      },
      {
        id: 616,
        name: "Cake",
        price: 250,
        description:
          "A soft, fluffy delight layered with sweetness for every celebration.",
        imgUrl: "/images/cake.png",
      },
      {
        id: 617,
        name: "Ice Cream",
        price: 150,
        description:
          "A creamy, chilled dessert that melts happiness in every scoop.",
        imgUrl: "/images/ice-cream.png",
      },
    ],
  },
  reducers: {},
});

//get the localstorage data and assign to initialState
const initialState = JSON.parse(localStorage.getItem("cart"))||[]

const cartSlice = createSlice({
  name: "cart",
  initialState, 
  
  reducers: {
    addToCart: (state, action) => {
      let item = state.find((state) => state.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex != -1) {
        state.splice(itemIndex, 1);
      }
    },
    incQuantity(state, action) {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decQuantity: (state, action) => {
      let item = state.find((i) => i.id === action.payload.id); 
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        
        return state.filter((i) => i.id !== action.payload.id); 
      }
    },
    clearCart:()=>[],
  },
});
export let { addToCart, removeFromCart, incQuantity, decQuantity,clearCart } = cartSlice.actions;

let ordersSlice = createSlice({
  name: "orders",
  initialState: [],
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
export let { registerUser, loginUser } = authSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    authentication:authSlice.reducer,
  },
});


//Set the global state value to LocalStorage
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
})

// ✅ Save authentication state on every change
store.subscribe(() => {
  localStorage.setItem(
    "authentication",
    JSON.stringify(store.getState().authentication)
  );
});

export default store;
