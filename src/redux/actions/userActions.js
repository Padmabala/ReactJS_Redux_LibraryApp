import { notifyAjaxCallFailure, notifyAjaxCallStart, notifyAjaxCallSuccess } from "./ajaxCallActions";
import fetchDetails from "../../services/fetchDetails";
// import { ACTION_GET_USER_DETAILS } from "../actionTypes/actionTypes";
import { GET_USER_DETAILS_BY_USERNAME_API } from "../../constants/serverUrls";
import { ACTION_GET_USER_DETAILS } from "./actionTypes/actionTypes";

export const createNewUser=()=>{

};

export const getUserDetails=(username,password)=>{
    return  async dispatch=> {
        try{
            //let urlParam=GET_USER_DETAILS_BY_USERNAME_API.replace(":username",username);
            //urlParam=urlParam.replace(":password",password);         
            //dispatch(notifyAjaxCallStart());   
            const data=await fetchDetails(GET_USER_DETAILS_BY_USERNAME_API.replace(":username",username),"GET")
            const [user]=data;
            await dispatch(validateUser(user))
            // .then(data=>{
            //     console.log("sdfsdf",data)
              
            // });
            
            
            
            
            
        }
        catch(e){
            
            console.error(e);
        }
    }
};

export const validateUser=(userDetails)=>{
    return{
        
        type:ACTION_GET_USER_DETAILS,
        payload:userDetails
    }
}