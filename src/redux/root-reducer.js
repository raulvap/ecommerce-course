// Lesson 114: this will be the root that representates overall the states

import { combineReducers } from "redux";

//Lesson 141: sesionStorage:
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// --- REDUCERS:
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// lesson 141: define a new persistStorage:
const persistConfig = {
   key: "root",
   storage,
   //whitelist serán los elementos que queremos mantener dentro de la sesión
   whitelist: ["cart"],
};

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   dictory: directoryReducer,
   shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
