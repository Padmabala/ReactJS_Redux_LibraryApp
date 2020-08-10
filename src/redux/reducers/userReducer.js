import initialState from "../store/initialState";
import { ACTION_GET_USER_DETAILS } from "../actions/actionTypes/actionTypes";
// import { ACTION_GET_USER_DETAILS } from "./actionTypes/actionTypes";

const userReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case ACTION_GET_USER_DETAILS:
            state={
                ...state,
                user:action.payload
            }
            return(state.user);
        default:
            return state;
    }
}
export default userReducer;