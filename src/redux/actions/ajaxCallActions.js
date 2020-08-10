import { NOTIFY_AJAX_CALL_STARTS, NOTIFY_AJAX_CALL_SUCCESS, NOTIFY_AJAX_CALL_FAILURE } from "./actionTypes/actionTypes"

export const notifyAjaxCallStart=()=>{
    return({
        type: NOTIFY_AJAX_CALL_STARTS
    })    
};

export const notifyAjaxCallSuccess=()=>{
    return({
        type:NOTIFY_AJAX_CALL_SUCCESS
    })
};

export const notifyAjaxCallFailure=()=>{
    return({
        type:NOTIFY_AJAX_CALL_FAILURE
    })
};

