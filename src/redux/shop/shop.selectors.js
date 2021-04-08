//Lesson 143:
// 4th STEP: configure the selectors (shop.selectors)

import { createSelector } from "reselect";

//from the total state, we use only the state referral to the shop:
const selectShop = (state) => state.shop;

//create the selectors from the state, to pass them like props:
export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

// next:
// 5th STEP: configure/edit shop.page.jsx
