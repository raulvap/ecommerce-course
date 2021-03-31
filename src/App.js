import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";

import "./App.css";

//una página de inicio
const HatsPage = () => (
   <div>
      <h1>HATS PAGE </h1>
   </div>
);

function App() {
   return (
      <div>
         <Switch>
            {/* Switch explained in lesson 76 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={HatsPage} />
         </Switch>
      </div>
   );
}
export default App;
