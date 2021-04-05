import React from "react";
import { Switch, Route } from "react-router-dom";

// --- authentication:
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// --- pages:
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInUp from "./pages/sign-in-up";
import Header from "./components/header/header.component.jsx";

import "./App.css";

class App extends React.Component {
   // Lesson 95: hacemos un componente para guardar el State de Auth de Google
   constructor() {
      super();

      this.state = {
         currentUser: null,
      };
   }

   //Lesson 95: minute 8:08
   //para cerrar sesión:
   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         //lesson 101:
         // createUserProfileDocument(user);

         //Lesson 103: we store the UserData in the "state" of our app to use it
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapshot) => {
               this.setState(
                  {
                     currentUser: {
                        id: snapshot.id,
                        ...snapshot.data(),
                     },
                  },
                  () => {
                     console.log(this.state);
                  }
               );
            });
         } else {
            this.setState({ currentUser: userAuth });
         }
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            {/* al poner el Header fuera del switch, siempre se va a mostrar en todas las páginas */}
            <Switch>
               {/* Switch explained in lesson 76 */}
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={SignInUp} />
            </Switch>
         </div>
      );
   }
}

export default App;
