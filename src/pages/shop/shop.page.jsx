import React from "react";
import { Route } from "react-router-dom";

// **************************
// EVERYTHING CHANGE ON LESSON 144:
// ShopPage is becoming a simple non-connected component now.
// We wil now have the child component of the shopPage be connected

// --- REDUX: (lesson 143) (modified on lesson 144)
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";
// Lesson 179: import new action:
// import { updateCollections } from "../../redux/shop/shop.actions";

//Lesson 191: container pattern:
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// Lesson 188:
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
   selectIsCollectionFetching,
   selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

// --- FIRESTORE: (Lesson 178)
// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

// --- COMPONENTS ---
// import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import CollectionPage from "../../pages/collection/collection.page";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
//Lesson 182:
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

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
// function ShopPage({ match }) {
//    return (
//       <div className="shop-page">
//          {/* {collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//          ))} */}
//          {/* <CollectionsOverview /> */}
//          {/* Lesson 145: nested route */}
//          <Route exact path={`${match.path}`} component={CollectionsOverview} />
//          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//       </div>
//    );
// }

// const mapStateToProps = createStructuredSelector({
//    collections: selectCollections,
//    //selectCollections comes from shop.selector
// });

// export default connect(mapStateToProps)(ShopPage);
// export default ShopPage;

// 6th STEP: review in the browser if it renders correctly (lesson 143)

// Lesson 178: chaging to a Class Component
class ShopPage extends React.Component {
   // constructor() {
   //    super();

   //    this.state = {
   //       loading: true,
   //    };
   // }
   // Esto es lo mismo que escribir: (lesson 182)
   state = {
      loading: true,
   };

   unsubscribeFromSnapshot = null;

   componentDidMount() {
      //Lesson 188: we dont need this because we are using redux-thunk doing this
      // const { updateCollections } = this.props;
      // const collectionRef = firestore.collection("collections");
      // // Lesson 187: using API with get (Promises)
      // collectionRef.get().then((snapshot) => {
      //    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      //    updateCollections(collectionsMap);
      //    this.setState({ loading: false });
      // });
      // fetch(
      //    "https://firestore.googleapis.com/v1/projects/e-commerce-raulvap/databases/(default)/documents/collections"
      // )
      //    .then((response) => response.json())
      //    .then((collections) => console.log(collections));

      //Lesson 188:
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
   }

   render() {
      //Lesson 188: sacamos isCollectionFetching
      const {
         match,
         // isCollectionFetching, Lesson 191: we don't use it anymore because the container has all the info
         // isCollectionsLoaded, Lesson 191: we don't use it anymore because the container has all the info
      } = this.props;
      const { loading } = this.state;

      return (
         <div className="shop-page">
            {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}

            {/* Lesson 182: */}
            <Route
               exact
               path={`${match.path}`}
               // render={(props) => (
               //    <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
               // )}
               // Lesson 191: container pattern:
               component={CollectionsOverviewContainer}
            />
            <Route
               path={`${match.path}/:collectionId`}
               // render={(props) => (
               //    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
               // )}
               // Lesson 191: container pattern
               component={CollectionPageContainer}
            />
         </div>
      );
   }
}

//Lesson 188: we change this: (lesson 191 we dont use this)
// const mapStateToProps = createStructuredSelector({
//    isCollectionFetching: selectIsCollectionFetching,
//    //Lesson 189:
//    isCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
// y ahora modificamos el state en la función más arriba:

export default connect(null, mapDispatchToProps)(ShopPage);
