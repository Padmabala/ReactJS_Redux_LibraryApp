import initialState from "../store/initialState";
import { ACTION_GET_USER_AUTHORIZATION_STATUS } from "../actions/actionTypes/actionTypes";
// import { ACTION_GET_USER_AUTHORIZATION_STATUS } from "./actionTypes/actionTypes";

const setUserAuthorizationStatusReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_GET_USER_AUTHORIZATION_STATUS:
            state={
                ...state,
                authorizedUser:action.payload
            }
            return(state.authorizedUser);
        default:
            return state
    }
}
export default setUserAuthorizationStatusReducer;