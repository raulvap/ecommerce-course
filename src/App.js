import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import Header from "./components/header/header.component.jsx";

import "./App.css";

function App() {
   return (
      <div>
         <Header />
         {/* al poner el Header fuera del switch, siempre se va a mostrar en todas las páginas */}
         <Switch>
            {/* Switch explained in lesson 76 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
         </Switch>
      </div>
   );
}
export default App;
