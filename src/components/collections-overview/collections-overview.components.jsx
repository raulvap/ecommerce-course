// Lesson 144:
import React from "react";

// --- REDUX:
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//lesson 152: change the function:
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// --- COMPONENT:
import CollectionPreview from "../collectionPreview/collectionPreview.component";

import "./collections-overview.styles.scss";

function CollectionsOverview({ collections }) {
   //gets the collections from redux state

   return (
      <div className="collections-overview">
         {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))}
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   //Lesson 152: change the function props
   // collections: selectCollections,
   //selectCollections comes from shop.selector
   collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
