import initialState from "../store/initialState";
import { NOTIFY_AJAX_CALL_SUCCESS, NOTIFY_AJAX_CALL_STARTS, NOTIFY_AJAX_CALL_FAILURE } from "../actions/actionTypes/actionTypes";
// import { NOTIFY_AJAX_CALL_STARTS, NOTIFY_AJAX_CALL_SUCCESS, NOTIFY_AJAX_CALL_FAILURE } from "./actionTypes/actionTypes";

const ajaxCallsReducer=(state=initialState.ajaxCalls,action)=>{
    switch(action.type){
        case NOTIFY_AJAX_CALL_STARTS:
            return({
                ...state,
                apiCallStatus:{
                    loading: true,
                    hasError: false,
                }
            });
        case NOTIFY_AJAX_CALL_SUCCESS:
            return({
                ...state,
                apiCallStatus:{
                    loading: false,
                    hasError: false,
                }
            });
        case NOTIFY_AJAX_CALL_FAILURE:
            return({
                ...state,
                apiCallStatus:{
                    loading: false,
                    hasError: true,
                }
            });
    
        default:
            return state;
    }
}
export default ajaxCallsReducer;