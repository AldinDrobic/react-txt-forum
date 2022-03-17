import { ACTION_SESSION_SET } from "../actions/sessionActions"

const initialState = {
    avatar: "",
    createdAt: "",
    id: "",
    lastLogin: "",
    token: "",
    username: "",
    loggedIn: false
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SESSION_SET:
            return {
                //Spread out the payload which is the action that the reducer gets from the profile (sessionActions.js payload: profile)
                ...action.payload,
                loggedIn: true
            }
        default:
            return state
    }
}