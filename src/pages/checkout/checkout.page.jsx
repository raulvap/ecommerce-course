import React from "react";

// --- REDUX:
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

// --- COMPONENTS:
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe/stripe-button.component";

import "./checkout.styles.scss";

function Checkout({ cartItems, total }) {
   return (
      <div className="checkout-page">
         <div className="checkout-header">
            <div className="header-block">
               <span>Product</span>
            </div>
            <div className="header-block">
               <span>Description</span>
            </div>
            <div className="header-block">
               <span>Quantity</span>
            </div>
            <div className="header-block">
               <span>Price</span>
            </div>
            <div className="header-block">
               <span>Remove</span>
            </div>
         </div>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}

         <div className="total">
            <span>TOTAL: $ {total}</span>
         </div>

         {/* Total comes from the selector: */}
         <div className="button-pay">
            <StripeCheckoutButton price={total} />
         </div>
         <div className="test-warning">
            *Please use the following <b>TEST</b> Credit Card for payments*
            <br />
            4242 4242 4242 4242
            <br />
            Exp: 01/23 | CVV
         </div>
      </div>
   );
}

// para poder agregar los props al componente: (lesson 134)
const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
