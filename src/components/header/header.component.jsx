import React from "react";
// import { Link } from "react-router-dom";

//Lesson 116: connect()
import { connect } from "react-redux";
//Lesson 132: using selectors:
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { auth } from "../../firebase/firebase.utils";

// --- COMPONENTS: ---
import CartIcon from "../atoms/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdrown/cart-dropdrown.component";

// importamos el logo como un componente
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

//Lesson 166: changing for styles-component
// import "./header.styles.scss";
import {
   HeaderContainer,
   LogoContainer,
   OptionsContainer,
   OptionDiv,
   OptionLink,
} from "./header.styles";

function Header({ currentUser, hidden }) {
   //Lesson 166: changing for styles-component
   // return (
   //    <div className="header">
   //       <Link className="logo-container" to="/">
   //          <Logo className="logo" />
   //       </Link>
   //       <div className="options">
   //          <Link className="option" to="/shop">
   //             SHOP
   //          </Link>
   //          <Link className="option" to="/contact">
   //             CONTACT
   //          </Link>
   //          {currentUser ? (
   //             <div className="option" onClick={() => auth.signOut()}>
   //                SIGN OUT
   //             </div>
   //          ) : (
   //             <Link className="option" to="/signin">
   //                SIGN IN
   //             </Link>
   //          )}
   //          <CartIcon />
   //       </div>
   //       {hidden ? null : <CartDropdown />}
   //    </div>
   // );
   return (
      <HeaderContainer>
         <LogoContainer to="/">
            <Logo className="logo" />
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {currentUser ? (
               <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
            ) : (
               <OptionLink to="/signin">SIGN IN</OptionLink>
            )}
            <CartIcon />
         </OptionsContainer>
         {hidden ? null : <CartDropdown />}
      </HeaderContainer>
   );
}

//Lesson 115: function that allow us to access the state, a root-reducer:
// const mapStateToProps = (state) => ({

//lesson 121: para hacer un deconstructing from nested values:
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//    currentUser,
//    hidden,
// });

//Lesson 132: using selectors:
// const mapStateToProps = (state) => ({
//    currentUser: selectCurrentUser(state),
//    hidde: selectCartHidden(state),
// });
// ---- esto es lo mismo a utilizar "createStructuredSelector":
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
