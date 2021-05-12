//Lesson 143:
// 4th STEP: configure the selectors (shop.selectors)

import { createSelector } from "reselect";

//Lesson 147: vamos a hacer un objeto que coincida con las collection para el route:
// cambiamos el número por el string

//Lesson 150: lo quitamos pq la info ya es un objeto
// const COLLECTION_ID_MAP = {
//    hats: 1,
//    sneakers: 2,
//    jackets: 3,
//    womens: 4,
//    mens: 5,
// };

//from the total state, we use only the state referral to the shop:
const selectShop = (state) => state.shop;

//create the selectors from the state, to pass them like props:
export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

// next:
// 5th STEP: configure/edit shop.page.jsx

//Lesson 147: creamos el selector para la acción:
export const selectCollection = (collectionUrlParam) =>
   createSelector([selectCollections], (collections) =>
      //   collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
      //Lesson 150: Data Normalization
      // collections[collectionUrlParam]

      // Lesson 181: usamos un spin para que se muestre cuando está cargando
      collections ? collections[collectionUrlParam] : null
   );

// Lesson 152: to use in collections-overview
export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
   collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// lesson 188: creamos un nuevo selector:
export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching);

// Lesson 189:
export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);
