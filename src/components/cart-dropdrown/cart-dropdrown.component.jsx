import React from "react";
import { withRouter } from "react-router-dom";

//Redux: (lesson 126)
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// --- COMPONENTS ---
import CustomButton from "../atoms/button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdrown.styles.scss";

function CartDropdown({ cartItems, history, dispatch }) {
   //dispatch: lesson 136
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.length ? (
               cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
               <span className="empty-message">Your cart is empty</span>
            )}
         </div>
         <CustomButton
            onClick={() => {
               history.push("/checkout");
               dispatch(toggleCartHidden());
            }}
         >
            GO TO CHECKOUT
         </CustomButton>
      </div>
   );
}

//para tener disponibles las props desde el state:
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//    cartItems,
// });

// Lesson 130: selectors
// const mapStateToProps = (state) => ({
//    cartItems: selectCartItems(state),
// });

// Lesson 132: using createStructureSelector:
const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

// wrap withRouter : lesson 133, min 7:01
export default withRouter(connect(mapStateToProps)(CartDropdown));
