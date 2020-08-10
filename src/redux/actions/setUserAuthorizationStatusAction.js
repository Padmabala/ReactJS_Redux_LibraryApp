import { ACTION_GET_USER_AUTHORIZATION_STATUS } from "./actionTypes/actionTypes";


export const setUserAuthorizationStatusAction=(authStatus)=>{
    return({
        type: ACTION_GET_USER_AUTHORIZATION_STATUS,
        payload:authStatus
    })
}
