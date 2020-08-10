import React,{Component} from 'react'
import { GET_BOOKS_API, GET_CART_DETAILS_BY_USER_ID_API, GET_CART_DETAILS_BY_CART_ID_API, } from '../../constants/serverUrls';

import {Redirect} from 'react-router-dom';
import '../../App.css';
import routes from '../../routes/routes';
// import getDetails from '../../services/getDetails';
// import fetchBookDetails from '../../services/fetchBookDetails';
// import createOrUpdateDetails from '../../services/createOrUpdateDetails';
// import getCartData from '../../services/getCartData';
import { connect } from 'react-redux';
import BookDetail from '../../CommonComponents/BookDetail';
class Books extends Component{

    state={
        
        // validUser:this.props.location.state.validUser,
        // username:this.props.location.state.username,
        // userId:this.props.location.state.userId,
        // cart:this.props.location.state.cart,
        // books:this.props.location.state.books,
        // updateCart:this.props.location.state.updateCart
        message:"",
        fieldDisabled:"",
    };

    
    constructor(props){
        super(props);
        console.log("hellot to books");
    }   
    componentDidMount(){
        console.log("In mount of books")
    }
    // addToCart=async(event,bookId,availability)=>{
    //     try{
    //         let {cart}=this.state
    //         const cartRequestBody = {
    //             "books": [...cart.books,bookId]
    //         };
            
    //         const cartResponse = await createOrUpdateDetails(GET_CART_DETAILS_BY_CART_ID_API.replace(":cartID",cart.id),"PATCH",cartRequestBody)
            
    //         .then(cartResponse=>{
    //             this.setButtonDisplayValue("Book has been added to the cart",true)
    //         });
    //     }
    
    // catch(error){
    //     console.log("an error occurred",error);
    // }
    // };
    // updateCart=(cart)=>{
    //     this.state.updateCart(cart);
    // }
    setMessageFieldProp(msg,fd){
        debugger;
        this.setState({
            message:msg,
            fieldDisabled:fd
        })
    }
        
    
     render(){
        // const {books,validUser,username,userId,message,fieldDisabled,cart}=this.props;
        const {books,authorizedUser,user,cart,shelf}=this.props;
        const {message,fieldDisabled}=this.state;
        console.log(books,"all books");
        console.log(cart,cart.books);
        return(
            <div>
                            <p>Hi {user.username}</p>

                {
                    authorizedUser
                    ?                    
                    books.map((book,bookIndex)=>{
                    
                        console.log(book.id,"from the Book")
                        return(                            
                            <div className="inline">
                                
                            <BookDetail
                            key={bookIndex}
                            bookId={parseInt(book.id)}
                            title={book.title}
                            author={book.author}
                            country={book.country}
                            language={book.language}
                            year={book.year}
                            pages={book.pages}
                            link={book.link}
                            imageLink={book.imageLink}
                            availability={book.availability}
                            TotalCopies={book.TotalCopies}
                            userId={user.userId}
                            cartId={cart.id}
                            shelfId={shelf.id}
                            cart={cart.books}
                            shelf={shelf.books}
                            message={message}
                                fieldDisabled={fieldDisabled}
                                setMessageFieldProp={this.setMessageFieldProp.bind(this)}

                            // addToCart={this.addToCart}
                            // checkBookAlreadyInCart={this.checkBookAlreadyInCart}
                            // setButtonDisplayValue={this.setButtonDisplayValue}
                            // allBooks={true}
                            // updateCart={this.updateCart}
                            />
                            </div>
                        )
                    })
                    :
                    <Redirect to={routes.login}/>
                }
            
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return({
        authorizedUser:state.authorizedUser,
        user:state.user,
        books:state.books,
        cart:state.cart,
        shelf:state.shelf
    })
}
export default connect(mapStateToProps)(Books);