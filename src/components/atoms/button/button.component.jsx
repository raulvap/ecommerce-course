import React from "react";

import "./button.styles.scss";

export default function CustomButton(props) {
   // deconstructing the props:
   const { children, isGoogleSignIn, inverted, ...otherProps } = props;

   return (
      <button
         className={`
      ${isGoogleSignIn ? "google-sign-in" : ""} 
      ${inverted ? "inverted" : ""}
      custom-button`}
         {...otherProps}
      >
         {children}
      </button>
   );
}
