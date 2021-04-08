// Lesson 130: selectors
import { createSelector } from "reselect";

//selectors ayudan a mejorar el rendimiento

// 1.input selector: a function that takes all the state and just returns a slice of it:
const selectCart = (state) => state.cart;

// 2.export selector: a function that manages the state only if it has to be re-rendered
export const selectCartItems = createSelector(
   // 1st argument: el state que sacamos del state general (pueden ser varios)
   [selectCart],
   // 2nd argument: lo que queremos hacer/actualizar en el state:
   (cart) => cart.cartItems
);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
   cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
   cartItems.reduce(
      (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity * cartItem.price,
      0
   )
);
