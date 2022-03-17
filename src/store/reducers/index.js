//This is the root reducer, where the root of the app exists.

import { combineReducers } from "redux";
//Importing all the reducers which will be combined to one reducer
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";

//combineReducers is a function that takes in reducers and combines them to one 
const appReducer = combineReducers({
    loginReducer,
    sessionReducer
})

export default appReducer