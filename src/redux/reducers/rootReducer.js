import { combineReducers } from 'redux';
import userReducer from './userReducer';
import setUserAuthorizationStatusReducer from './setUserAuthorizationStatusReducer';
import ajaxCallsReducer from './ajaxCallsReducers';
import {getBooksReducer, getCartBooksReducer, getShelfBooksReducer } from './booksReducer';

const rootReducer=combineReducers({
    user:userReducer,
    authorizedUser:setUserAuthorizationStatusReducer,
    ajaxCalls:ajaxCallsReducer,
    books:getBooksReducer,
    cart:getCartBooksReducer,
    shelf:getShelfBooksReducer
})
export default rootReducer;