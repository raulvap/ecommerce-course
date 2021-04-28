import React from "react";
import Directory from "../../components/directory/directory.component";

//Lesson 166: changing for styles-component
// import "./homepage.styles.scss";
import { HomePageContainer } from "./homepage.styles";

export default function Homepage() {
   return (
      <HomePageContainer>
         <Directory />
      </HomePageContainer>
   );
}
