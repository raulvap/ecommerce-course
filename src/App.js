import React from "react";
import { Switch, Route } from "react-router-dom";

// --- authentication:
import { auth } from "./firebase/firebase.utils";

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
      this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user });

         console.log(user);
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
