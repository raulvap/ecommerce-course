import React from "react";
//Redux: (lesson 126)
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// --- COMPONENTS ---
import CustomButton from "../atoms/button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdrown.styles.scss";

function CartDropdown({ cartItems }) {
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))}
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
   );
}

//para tener disponibles las props desde el state:
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//    cartItems,
// });

// Lesson 130: selectors
const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
