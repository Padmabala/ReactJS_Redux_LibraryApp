import rootReducer from "../reducers/rootReducer";
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const configureStore=preloadedState=>{
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
     );
}
export default configureStore;