// Lesson 181: creating spinner
import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

//High Order Component: (lesson 181)
const WithSpinner = (WrappedComponent) => {
   const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
      ) : (
         <WrappedComponent {...otherProps} />
      );
   };
   return Spinner;
};

export default WithSpinner;
