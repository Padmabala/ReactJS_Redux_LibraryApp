import initialState from "../store/initialState";
const { ACTION_GET_ALL_BOOKS, ACTION_GET_BOOKS_IN_CART, ACTION_GET_BOOKS_IN_SHELF } = require("../actions/actionTypes/actionTypes");

export const getBooksReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_GET_ALL_BOOKS:
            state={
                ...state,
                books:action.payload
            }
            return(state.books);
        default:
            return state;
    }
}
export const getCartBooksReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_GET_BOOKS_IN_CART:
            state={
                ...state,
                cart:action.payload
            }
            return(state.cart);
        default:
            return state;
    }
}
export const getShelfBooksReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_GET_BOOKS_IN_SHELF:
            state={
                ...state,
                shelf:action.payload
            }
            return(state.shelf);
        default:
            return state;
    }
}
