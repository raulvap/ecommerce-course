import React from "react";

// --- COMPONENTS ---
import CollectionItem from "../collectionItem/collectionItem.component";

import "./collectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => (
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
         {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
      </div>
   </div>
);

export default CollectionPreview;
