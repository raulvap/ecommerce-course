import React from "react";
import { Link } from "react-router-dom";
//Lesson 116: connect()
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

// importamos el logo como un componente
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

// --- COMPONENTS: ---
import CartIcon from "../atoms/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdrown/cart-dropdrown.component";

import "./header.styles.scss";

function Header({ currentUser, hidden }) {
   return (
      <div className="header">
         <Link className="logo-container" to="/">
            <Logo className="logo" />
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
               SHOP
            </Link>
            <Link className="option" to="/contact">
               CONTACT
            </Link>
            {currentUser ? (
               <div className="option" onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
            ) : (
               <Link className="option" to="/signin">
                  SIGN IN
               </Link>
            )}
            <CartIcon />
         </div>
         {hidden ? null : <CartDropdown />}
      </div>
   );
}

//Lesson 115: function that allow us to access the state, a root-reducer:
// const mapStateToProps = (state) => ({

//lesson 121: para hacer un deconstructing from nested values:
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
   currentUser,
   hidden,
});

export default connect(mapStateToProps)(Header);
