import React from "react";

// --- REDUX (lesson 147)
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

// --- COMPONENTS:
import CollectionItem from "../../components/collectionItem/collectionItem.component";

import "./collection.styles.scss";

// Lesson 145: nesting routing from shop.page
function CollectionPage({ collection }) {
   const { title, items } = collection;

   return (
      <div className="collection-page">
         <h2 className="title">{title}</h2>
         <div className="items">
            {items.map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
}

//Lesson 147:
const mapStateToProps = (state, ownProps) => ({
   // this is a currying function: (bonus lesson, 359)
   collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
