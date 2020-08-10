import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {NavLink} from 'react-router-dom';
import routes from '../routes/routes';
import {useState,useEffect} from 'react';
import { sendData } from '../services/sendData';
import { GET_BOOKS_IN_CART, UPDATE_BOOKS_IN_CART, UPDATE_BOOKS_IN_SHELF, UPDATE_BOOK_DETAILS } from '../constants/serverUrls';


// import { GET_CART_DETAILS_BY_CART_ID_API, GET_CART_DETAILS_BY_USER_ID_API } from '../constants/serverUrls';

// import createOrUpdateDetails from '../services/createOrUpdateDetails';
// import getDetails from '../services/getDetails';
// import getCartData from '../services/getCartData';
const DisplayBooks=({
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
    
    
    // const [msg,setMsg]=useState("");
    // const [fd,setFd]=useState(false);
    // useEffect(()=>{
    //     console.log("they are changed")
    // },[msg,fd])
    const [m,setM]=useState("");
    const [f,setF]=useState("");
    let msg,fd
    if(!availability){
        debugger;
        msg="Book is not available";
        fd=true;
        // setMessageFieldProp(message,fieldDisabled);
    }
    else
    {
            msg="Add to Shelf"
            fd=false
            // setMessageFieldProp(message,fieldDisabled);
         }
        
    
   
     const addToShelf=async (event)=>{
        try{
            console.log(bookId,cartId)
                const shelfRequestBody = {
                    "books": [...shelf,bookId]
                };
                
                // = await update(GET_BOOKS_IN_CART,PATCH);
                await sendData(UPDATE_BOOKS_IN_SHELF.replace(":id",parseInt(shelfId)),"PATCH",shelfRequestBody)
                
                .then(async cartResponse=>{
                    console.log("Book has been added to the Shelf")
                    msg="Book added to Shelf";
                    
                    fd=true;
                    
                    setM(msg);
                    setF("true");
                    
                    let available;
                            let tc=(TotalCopies)-1;
                            if(tc===0){
                                available=false
                            }
                            else{
                                available=true
                            } 
                            const bookRequestBody = {
                                "TotalCopies": tc,
                                "availability":available
                            };                            
                            await sendData(UPDATE_BOOK_DETAILS.replace(":id",parseInt(bookId)),"PATCH",bookRequestBody);
                            const CartBooks=cart.filter(book=>book!==bookId)
                            const cartRequestBody = {
                                "books":CartBooks
                            };
                            await sendData(UPDATE_BOOKS_IN_CART.replace(":id",parseInt(cartId)),"PATCH",cartRequestBody);
                            
            });
        }
        catch(error){
            console.log("an error occurred",error);
        }


     };  
     
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
            <input type="button" id="btn" value={m} onClick={addToShelf} disabled/> 
            :
            <input type="button" id="btn" value={m} onClick={addToShelf}/> 
            :
            fd
            ?
            <input type="button" id="btn" value={msg} onClick={addToShelf} disabled/> 
            :
            <input type="button" id="btn" value={msg} onClick={addToShelf}/> 
        }
        
        { 
            
        }
        <br/>
        </div>
    )
};
DisplayBooks.propTypes={
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

export default DisplayBooks;