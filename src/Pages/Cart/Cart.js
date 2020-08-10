import React,{Component} from 'react'
// import { GET_BOOKS_API, GET_CART_DETAILS_BY_USER_ID_API, GET_CART_DETAILS_BY_CART_ID_API, GET_BOOKS_BY_ID_API, } from '../../constants/serverUrls';

// import {Redirect} from 'react-router-dom';
import '../../App.css';
// import routes from '../../routes/routes';
// import getDetails from '../../services/getDetails';
// import fetchBookDetails from '../../services/fetchBookDetails';
// import createOrUpdateDetails from '../../services/createOrUpdateDetails';
// import getCartData from '../../services/getCartData';
// import DisplayBooks from '../../Common Components/DisplayBooks';
import { connect } from 'react-redux';
import DisplayBooks from '../../CommonComponents/DisplayBooks';
import { setGlobalCssModule } from 'reactstrap/lib/utils';
class Cart extends Component{
    state={
    //     bookIds:[],
    //     validUser:this.props.location.state.validUser,
    //     username:this.props.location.state.username,
    //     userId:this.props.location.state.userId,
    //     cartId:this.props.location.state.cartId,
        message:"",
        fieldDisabled:"",
    //     books:[]
     };
    componentDidMount(){
        console.log("Hi");
        // this.getBooksDetails();
    }
    
//     getBooksDetails=async()=>{
//         /* const {match={}}=this.props;
//     const {params={}}=match;
//     const {title:name =""}=params; */
//     let book=[];
    
    
//     book=await getCartData(GET_CART_DETAILS_BY_CART_ID_API.replace(":cartID",this.state.cartId),"GET");
//     this.setState({
//         bookIds:book.books
//     });
//     console.log(this.state.bookIds);
    
//     let data1;
//     let b=this.state.bookIds;
//     this.getDetails(b).then(data=>
//         {console.log(data);
//         const [d]=data;
//         console.log(d);
//         this.setState({
//             books:data
//         });
//         console.log("jjj",this.state.books,"fdsfdf")
//         })
    
        
// }

//     getDetails=async(bookIds)=>{
//         return await Promise.all(bookIds.map(bookId=>this.anotherFunction(bookId)))
//     }
    
//     anotherFunction=async(bookId)=>{
//         return await fetchBookDetails(GET_BOOKS_BY_ID_API.replace(":id",bookId),"GET")
//     }
    
setMessageFieldProp(msg,fd){
    debugger;
    this.setState({
        message:msg,
        fieldDisabled:fd
    })
}
    render(){
        const {cart,shelf,user,books}=this.props;   
        const {message,fieldDisabled}=this.state;
        console.log(this.props,"That is what is here");
        return(
            <div>
                {
                    cart.books.map((cb,bookIndex)=>
                    {
                        console.log(cb,"is the bok id")
                        console.log(books)
                     const [book]=books.filter(book=>parseInt(book.id)===cb)
                     console.log(book,"found")
                    // let book;
                    // debugger;
                    //  for(let i=0;i<books.length;i++){
                    //      if(parseInt(books[i].id)===cb){
                    //         console.log(books[i],"found")
                    //         book=books[i];
                    //         break;
                    //      }
                    //      else{
                    //         console.log("Not found yet")
                    //      }
                    //  }
                     console.log(book,"is the foind book from cart")
                        return(
                            <div>
                                <DisplayBooks
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
                                >
                                </DisplayBooks>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    console.log("Insed the cart HOC",state)
    return({
        authorizedUser:state.authorizedUser,
        user:state.user,
        books:state.books,
        cart:state.cart,
        shelf:state.shelf
    })
}
export default connect(mapStateToProps)(Cart);