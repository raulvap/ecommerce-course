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
