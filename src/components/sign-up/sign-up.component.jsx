import React, { Component } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// --- Components ---
import FormInput from "../atoms/form-input/form-input.component";
import CustomButton from "../atoms/button/button.component";
import { notification } from "antd";

import "./sign-up.styles.scss";

class SignUp extends Component {
   constructor() {
      super();

      this.state = {
         displayName: "",
         email: "",
         password: "",
         confirmPassword: "",
      };
   }

   handleSubmit = async (event) => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         notification["error"]({ message: "Las contraseñas no coinciden" });
      } else {
         try {
            //Lesson 104:
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
               displayName: "",
               email: "",
               password: "",
               confirmPassword: "",
            });
         } catch (error) {
            console.error(error);
         }
      }
   };

   handleChange = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: value });
   };

   render() {
      const { displayName, email, password, confirmPassword } = this.state;

      return (
         <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FormInput
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  label="Display Name"
                  required
               />
               <FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  label="Email"
                  required
               />
               <FormInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  label="Password"
                  required
               />
               <FormInput
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label="Confirm Password"
                  required
               />
               <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignUp;
