// Lesson 144:
import React from "react";

// --- REDUX:
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

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
   collections: selectCollections,
   //selectCollections comes from shop.selector
});

export default connect(mapStateToProps)(CollectionsOverview);
