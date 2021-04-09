import React from "react";
import { Route } from "react-router-dom";

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
import CollectionPage from "../../pages/collection/collection.page";
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

// function ShopPage({ collections }) {
//Lesson 145: change the routes:
function ShopPage({ match }) {
   return (
      <div className="shop-page">
         {/* {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))} */}
         {/* <CollectionsOverview /> */}
         {/* Lesson 145: nested route */}
         <Route exact path={`${match.path}`} component={CollectionsOverview} />
         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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
