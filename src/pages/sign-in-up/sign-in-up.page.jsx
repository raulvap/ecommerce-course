import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-up.styles.scss";

export default function SignInUp() {
   return (
      <div className="sign-in-and-sign-up">
         <SignIn />
         <SignUp />
      </div>
   );
}
