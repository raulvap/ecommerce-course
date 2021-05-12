// Lesson 143: data into redux state
// in lesson 181 we remove because now we have the state on redux
// import SHOP_DATA from "../../data/shoppingData";

// Lesson 179: using firestore to import data_collection:
import ShopActionTypes from "./shop.types";

//  1st STEP: create the initial state:
const INITIAL_STATE = {
   // collections: SHOP_DATA,

   //Lesson 181:
   collections: null,

   //lesson 188:
   isFetching: false,
   errorMessage: undefined,
};

// 2nd STEP: create the reducer
const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      //Lesson 179: creating new case:
      // case ShopActionTypes.UPDATE_COLLECTIONS:
      //    return {
      //       ...state,
      //       collections: action.payload,
      //    };

      // Lesson 188: fecthing from redux:
      case ShopActionTypes.FECTH_COLLECTIONS_START:
         return {
            ...state,
            isFetching: true,
         };

      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
         return {
            ...state,
            isFetching: false,
            collections: action.payload,
         };

      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
         return {
            ...state,
            isFetching: false,
         };

      //Lesson 188: now reconfigure shop.actions with thunks

      default:
         return {
            ...state,
            isFetching: false,
            errorMessage: action.payload,
         };
   }
};

export default shopReducer;

// 3rd STEP: pull it to the root reducer
// 4th STEP: configure the selectors (shop.selectors)
// 5th STEP: configure/edit shop.page.jsx
// 6th STEP: review in the browser if it renders correctly (lesson 143)
