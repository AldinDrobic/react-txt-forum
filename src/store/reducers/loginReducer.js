import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS } from "../actions/loginActions"

//This is the initial state when app is loaded
const initialState = {
    loginAttempting: false,
    loginError: ''
}

//This is the reducer, a pure function. 
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_LOGIN_ATTEMPTING:
            return {
                //We dont want to update the state directly through 
                //the initialState, beacuse that is a big no in React
                //Instead, we spread out the state in the return statement,
                //and return an copy of the data that is updated, then 
                //react will compare old state vs new state and update
                //UI accordingly. 
                ...state,
                loginAttempting: true,
                loginError: ''
            }
            case ACTION_LOGIN_SUCCESS:
                return {
                    ...initialState
                }
            case ACTION_LOGIN_ERROR: 
            return {
                ...state,
                loginAttempting: false,
                loginError: action.payload
            }
            default:
                return state
    }
}