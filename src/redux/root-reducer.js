// Lesson 114: this will be the root that representates overall the states

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
   user: userReducer,
   cart: cartReducer,
});
