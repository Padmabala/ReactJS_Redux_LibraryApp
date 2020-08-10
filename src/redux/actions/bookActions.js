import { GET_ALL_BOOKS, GET_BOOKS_IN_CART, GET_BOOKS_IN_SHELF } from "../../constants/serverUrls"
import fetchDetails from "../../services/fetchDetails";
import { ACTION_GET_ALL_BOOKS, ACTION_GET_BOOKS_IN_CART, ACTION_GET_BOOKS_IN_SHELF } from "./actionTypes/actionTypes";

export const getAllBooks=()=>{
    
    return async (dispatch)=>{
        try{
            
            const data=await fetchDetails(GET_ALL_BOOKS);
            await dispatch(loadBooks(data,ACTION_GET_ALL_BOOKS));
        }
        catch(error){
            console.log(error)
        }
    }
}
export const getBooksInCart=(cartID)=>{
    return async(dispatch)=>{
        try{
            const data=await fetchDetails(GET_BOOKS_IN_CART.replace(':cartID',cartID));
            const [cartDetails]=data;
            await dispatch(loadBooks(cartDetails,ACTION_GET_BOOKS_IN_CART));
        }
        catch(error){
            console.log(error)
        }
    }
}
export const getBooksInShelf=(shelfID)=>{
    return async(dispatch)=>{
        try{
            const data=await fetchDetails(GET_BOOKS_IN_SHELF.replace(':shelfID',shelfID));
            const [shelfDetails]=data;
            await dispatch(loadBooks(shelfDetails,ACTION_GET_BOOKS_IN_SHELF));
        }
        catch(error){
            console.log(error)
        }
    }
}
const loadBooks=(data,type)=>{
    return{
        type,
        payload:data
    }
}