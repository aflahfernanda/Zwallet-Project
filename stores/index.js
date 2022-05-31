// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import promiseMiddleware from "redux-promise-middleware";
// import rootReducer from "./reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(
//   persistedReducer,
//   applyMiddleware(promiseMiddleware, logger)
// );
// let persistor = persistStore(store);

// export default { store, persistor };

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

// initial states here
// const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  // initalState,
  composeWithDevTools(applyMiddleware(...middleware, promiseMiddleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
