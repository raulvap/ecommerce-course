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
};

// 2nd STEP: create the reducer
const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      //Lesson 179: creating new case:
      case ShopActionTypes.UPDATE_COLLECTIONS:
         return {
            ...state,
            collections: action.payload,
         };

      default:
         return state;
   }
};

export default shopReducer;

// 3rd STEP: pull it to the root reducer
// 4th STEP: configure the selectors (shop.selectors)
// 5th STEP: configure/edit shop.page.jsx
// 6th STEP: review in the browser if it renders correctly (lesson 143)
