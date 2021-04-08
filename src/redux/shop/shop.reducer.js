// Lesson 143: data into redux state
import SHOP_DATA from "../../data/shoppingData";

//  1st STEP: create the initial state:
const INITIAL_STATE = {
   collections: SHOP_DATA,
};

// 2nd STEP: create the reducer
const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default shopReducer;

// 3rd STEP: pull it to the root reducer
// 4th STEP: configure the selectors (shop.selectors)
// 5th STEP: configure/edit shop.page.jsx
// 6th STEP: review in the browser if it renders correctly (lesson 143)
