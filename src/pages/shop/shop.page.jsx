import React from "react";

// **************************
// EVERYTHING CHANGE ON LESSON 144:
// ShopPage is becoming a simple non-connected component now.
// We wil now have the child component of the shopPage be connected

// --- REDUX: (lesson 143) (modified on lesson 144)
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

// --- COMPONENTS ---
// import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

// --- DATA ---
// import { SHOP_DATA } from "../../data/shoppingData";

//  ********* Change from Class component to Functional Component (Lesson 143) **********
// class ShopPage extends Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          collections: SHOP_DATA,
//       };
//    }

//    render() {
//       const { collections } = this.state;

//       return (
//          <div className="shop-page">
//             {collections.map(({ id, ...otherCollectionProps }) => (
//                <CollectionPreview key={id} {...otherCollectionProps} />
//             ))}
//          </div>
//       );
//    }
// }

function ShopPage({ collections }) {
   return (
      <div className="shop-page">
         {/* {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))} */}
         <CollectionsOverview />
      </div>
   );
}

// const mapStateToProps = createStructuredSelector({
//    collections: selectCollections,
//    //selectCollections comes from shop.selector
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;

// 6th STEP: review in the browser if it renders correctly (lesson 143)
