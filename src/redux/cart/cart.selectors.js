// Lesson 130: selectors
import { createSelector } from "reselect";

//selectors ayudan a mejorar el rendimiento

// 1.input selector: a function that takes all the state and just returns a slice of it:
const selectCart = (state) => state.cart;

// 2.export selector: a function that manages the state only if it has to be re-rendered
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
   cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0)
);
