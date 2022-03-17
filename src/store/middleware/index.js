//This is the root middleware, where the root of the app exists.

//applyMiddleware is a function that combines middlewares and exports them as one
import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";

export default applyMiddleware(
    loginMiddleware,
    sessionMiddleware
    );
