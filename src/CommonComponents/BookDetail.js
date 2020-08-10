import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {NavLink} from 'react-router-dom';
import routes from '../routes/routes';
import {useState} from 'react';
import { sendData } from '../services/sendData';
import { GET_BOOKS_IN_CART, UPDATE_BOOKS_IN_CART } from '../constants/serverUrls';


// import { GET_CART_DETAILS_BY_CART_ID_API, GET_CART_DETAILS_BY_USER_ID_API } from '../constants/serverUrls';

// import createOrUpdateDetails from '../services/createOrUpdateDetails';
// import getDetails from '../services/getDetails';
// import getCartData from '../services/getCartData';
const BookDetail=({
    bookId,
    title,
    author,
    country,
    language,
    year,
    pages,
    link,
    imageLink,
    availability,
    TotalCopies,
    userId,
    cartId,
    shelfId,
    cart,
    shelf,
    message,
    fieldDisabled,
    setMessageFieldProp
})=>{
    // let cart=[];
    // let bookInCart;
    const [m,setM]=useState("");
    const [f,setF]=useState("");
    console.log(bookId,"is the book Inside")
    let msg,fd;
    const checkBookAlreadyInCart=(event)=>{
        try{
        //  cart=await getCartData(GET_CART_DETAILS_BY_USER_ID_API.replace(":userID",userId));
         // const {cart} = response;
         console.log(bookId);
         
          if(cart.includes(bookId))
          {
            
              return true;
             
          }
          else{
            
              return false;
          }
        }
        catch(error){
            console.log(error)
        }
    }
    const checkBookAlreadyInShelf=(event)=>{
        try{
        //  cart=await getCartData(GET_CART_DETAILS_BY_USER_ID_API.replace(":userID",userId));
         // const {cart} = response;
         
         console.log(shelf)
          if(shelf.includes(bookId))
          {
              return true;
             
          }
          else{
            
              return false;
          }
        }
        catch(error){
            console.log(error)
        }
    }
    if(checkBookAlreadyInShelf()){
        msg="Book is already in your Shelf"
        fd=true
        console.log(message)
    }
    else{
        if(!availability){
            msg="Book is not available";
            fd=true;
        }
         else if(checkBookAlreadyInCart()){
            msg="Book is already in your cart"
            fd=true
            console.log(message)
         }
         else{
            msg="Add to Cart"
            fd=false
            console.log(message)
         }
        
    }
    
   
     const addCart=async (event)=>{
        try{
            console.log(bookId,cartId)
                const cartRequestBody = {
                    "books": [...cart,bookId]
                };
                debugger;
                // = await update(GET_BOOKS_IN_CART,PATCH);
                await sendData(UPDATE_BOOKS_IN_CART.replace(":id",parseInt(cartId)),"PATCH",cartRequestBody)
                
                .then(cartResponse=>{
                    console.log("Book has been added to the cart")
                    msg="Book has been added to the cart";
                    fd=true;
                    // setMessageFieldProp(msg,"true");
                    // if(message.length>0 & fieldDisabled.length>0){
                        
                    // }
                    setM(msg);
                    setF("true");

            });
                // document.getElementById("btn").value="Book has been added to the cart";
                
                // document.getElementById("btn").disabled=true;
                //fieldDisabled=true
        }
        catch(error){
            console.log("an error occurred",error);
        }


     };  
     console.log(m,f,m.length>0 & f.length>0 ,"oooooooooooooooooooooooooooo")
    return(
        
        <div className={`post-container container`}>
        <image src={imageLink} alt={title}></image>
        {/* <NavLink to={routes.author.replace(":title",author)}>
          </NavLink>   
           <NavLink className={`btn btn-primary button search`} to={routes.booksByTitle}>Lend Book</NavLink>      */
          
          }
        <h1>{title}</h1>
          
        <p>{author}</p>
        <p>{country}</p>
        <p>{language}</p>
        <p>{year}</p>
        <p>{pages}</p>
        {
            m.length>0 & f.length>0
            ?
            f
            ?
            <input type="button" id="btn" value={m} onClick={addCart} disabled/> 
            :
            <input type="button" id="btn" value={m} onClick={addCart}/> 
            :
            fd
            ?
            <input type="button" id="btn" value={msg} onClick={addCart} disabled/> 
            :
            <input type="button" id="btn" value={msg} onClick={addCart}/> 
        }
        <br/>
        </div>
    )
};
BookDetail.propTypes={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    language:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    pages:PropTypes.number.isRequired,
    link:PropTypes.string.isRequired,
    imageLink:PropTypes.string.isRequired,
    availability:PropTypes.bool.isRequired
}

export default BookDetail;