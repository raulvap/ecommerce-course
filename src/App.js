import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//lesson: 117 connect reducers
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// reducers:
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

// --- authentication:
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// --- pages:
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInUp from "./pages/sign-in-up";
import CheckoutPage from "./pages/checkout";
import Header from "./components/header/header.component.jsx";

import "./App.css";

class App extends React.Component {
   // Lesson 95: hacemos un componente para guardar el State de Auth de Google
   // constructor() {
   //Lesson 117: ya no necesitamos este constructor porque tenemos el reducer:
   //    super();

   //    this.state = {
   //       currentUser: null,
   //    };
   // }

   //Lesson 95: minute 8:08
   //para cerrar sesión:
   unsubscribeFromAuth = null;

   componentDidMount() {
      //Lesson 117: deconstructing:
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         //lesson 101:
         // createUserProfileDocument(user);

         //Lesson 103: we store the UserData in the "state" of our app to use it
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapshot) => {
               //Lesson 117: cambiamos el setState por el reducer:
               // this.setState(
               //    {
               //       currentUser: {
               //          id: snapshot.id,
               //          ...snapshot.data(),
               //       },
               //    },
               //    () => {
               //       console.log(this.state);
               //    }
               // );

               userRef.onSnapshot((snapShot) => {
                  setCurrentUser({
                     id: snapShot.id,
                     ...snapShot.data(),
                  });
               });
            });
         } else {
            setCurrentUser(userAuth);
         }
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header />
            {/* al poner el Header fuera del switch, siempre se va a mostrar en todas las páginas */}
            <Switch>
               {/* Switch explained in lesson 76 */}
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route exact path="/checkout" component={CheckoutPage} />
               {/* Lesson 118: render  */}
               <Route
                  exact
                  path="/signin"
                  render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInUp />)}
               />
            </Switch>
         </div>
      );
   }
}

// Lesson 118: redirect if there is a User Logged In:
// const mapStateToProps = ({ user }) => ({
//    currentUser: user.currentUser,
// });

//Lesson 132: changing structures:
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});

// Lesson 117:
const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
