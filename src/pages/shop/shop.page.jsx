import React, { Component } from "react";

// --- COMPONENTS ---
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";

// --- DATA ---
import { SHOP_DATA } from "../../data/shoppingData";

class ShopPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         collections: SHOP_DATA,
      };
   }

   render() {
      const { collections } = this.state;

      return (
         <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
         </div>
      );
   }
}

export default ShopPage;
