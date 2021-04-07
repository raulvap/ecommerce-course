//Lesson 121:
import { CartActionTypes } from "./cart.types";

//Lesson 124: utils:
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
   hidden: true,
   cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
   //si no hay state, entonces toma como inicial el INITIAL_STATE
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden,
         };

      case CartActionTypes.ADD_ITEM:
         //Lesson 123: adding item to cart - reducer
         return {
            ...state,
            // cartItems: [...state.cartItems, action.payload],
            // Lesson 124:
            cartItems: addItemToCart(state.cartItems, action.payload),
         };

      default:
         return state;
   }
};

export default cartReducer;
