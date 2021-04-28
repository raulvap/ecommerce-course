import React from "react";

//Lesson 169: using JS css styles:
// import "./button.styles.scss";
import { CustomButtomContainer } from "./custom-button.styles";

// export default function CustomButton(props) {
//    // deconstructing the props:
//    const { children, isGoogleSignIn, inverted, ...otherProps } = props;

//    return (
//       <button
//          className={`
//       ${isGoogleSignIn ? "google-sign-in" : ""}
//       ${inverted ? "inverted" : ""}
//       custom-button`}
//          {...otherProps}
//       >
//          {children}
//       </button>
//    );
// }

//Lesson 169: using JS css styles:
const CustomButton = ({ children, ...props }) => (
   <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButton;
