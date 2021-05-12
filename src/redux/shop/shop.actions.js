// Lesson 179
import ShopActionTypes from "./shop.types";

// export const updateCollections = (collectionsMap) => ({
//    type: ShopActionTypes.UPDATE_COLLECTIONS,
//    payload: collectionsMap,
// });

// Lesson 188: using redux-thunks:

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
   type: ShopActionTypes.FECTH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
   return (dispatch) => {
      const collectionRef = firestore.collection("collections");

      //from shop.page.jsx:
      collectionRef
         .get()
         .then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
         })
         .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
   };
};
