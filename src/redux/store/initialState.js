const initialState={
    user:{},
    authorizedUser:false,
    books:[],
    cart:[],
    shelf:[],
    ajaxCalls:{
        apiCallStatus:{
            loading:false,
            hasError:false
        }
    }

};



export default initialState;