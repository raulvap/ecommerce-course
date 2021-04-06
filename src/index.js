import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// lesson 114: setting redux:
import { Provider } from "react-redux";

//Lesson 115: import the store of the reducers/to manage state
import store from "./redux/store";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         {/* Lesson 114: Provider components is the parent, that have access to every state & store code */}
         <BrowserRouter>
            {/* BrowserRouter le da toda la funcionalidad de routing a los children que tenga: */}
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
