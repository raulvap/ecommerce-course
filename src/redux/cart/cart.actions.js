//Lesson 121
import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//Lesson 123
export const addItem = (item) => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});

// Lesson 138: 2nd step, define action:
export const clearItemFromCart = (item) => ({
   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
   payload: item,
});

// lESSON 139: 2nd step
export const removeItem = (item) => ({
   type: CartActionTypes.REMOVE_ITEM,
   payload: item,
});
