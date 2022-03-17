//This is the redux store

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
//Importing the combined reducers and middlewares
//Don't have to specify "/index.js" beacuse it is a default name
//If the name were something else then this wouldn't work 
import middleware from "./middleware";
import appReducer from "./reducers";

export default createStore(
    appReducer,
    composeWithDevTools(middleware)

)