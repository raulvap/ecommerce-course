import React from "react";

import "./cart-item.styles.scss";

export default function CartItem(props) {
   const {
      item: { imageUrl, price, name, quantity },
   } = props;

   return (
      <div className="cart-item">
         <img src={imageUrl} alt={name} />
         <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
               {quantity} x ${price}
            </span>
         </div>
      </div>
   );
}
