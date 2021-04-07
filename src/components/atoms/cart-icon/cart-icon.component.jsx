import React from "react";
// Redux:
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
// ---
import { ReactComponent as ShoppingIcon } from "../../../assets/svg/shopping-bag.svg";

import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
   return (
      <div className="cart-icon" onClick={toggleCartHidden}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{itemCount}</span>
      </div>
   );
}

// Redux:
const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//Lesson 128: selectors: computing a new value based on a state
const mapStateToProps = (state) => ({
   itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);