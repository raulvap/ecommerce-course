import React from "react";

import "./form-input.styles.scss";

//vamos a usar functional component para no usar State en él
export default function FormInput(props) {
   const { handleChange, label, ...otherProps } = props;

   return (
      <div className="group">
         <input className="form-input" onChange={handleChange} {...otherProps} />

         {label ? (
            <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
               {label}
            </label>
         ) : null}
      </div>
   );
}
