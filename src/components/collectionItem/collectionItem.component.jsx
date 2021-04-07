import React from "react";

// --- REDUX ---
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

// --- COMPONENTS ---
import CustomButton from "../atoms/button/button.component";

import "./collectionItem.styles.scss";

function CollectionItem(props) {
   const { item, addItem } = props;
   const { name, price, imageUrl } = item;

   return (
      <div className="collection-item">
         <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">$ {price}</span>
         </div>
         <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
         </CustomButton>
      </div>
   );
}

//Lesson 123:
const mapDispatchToProps = (dispatch) => ({
   addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
