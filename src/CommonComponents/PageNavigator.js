import React,{Component} from 'react';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,NavLink
} from 'react-router-dom';
import '../App.css';
import routes from '../routes/routes';
import Books from '../Pages/Books/Books';
import Cart from '../Pages/Cart/Cart';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks, getBooksInCart, getBooksInShelf } from '../redux/actions/bookActions';
import { getUserDetails } from '../redux/actions/userActions';
import { GET_ALL_BOOKS } from '../constants/serverUrls';
import WelcomePage from './WelcomePage';
import { ACTION_GET_BOOKS_IN_CART } from '../redux/actions/actionTypes/actionTypes';


class PageNavigator extends Component {
  state={
    isNavbarOpen:false,
  };
  toggleNavBar=(event)=>{
 
          this.setState(
          {isNavbarOpen:!this.state.isNavbarOpen});
  }

  componentDidMount(){    
    this.getBookDetails();
  }

  
  getBookDetails=async()=>{
    const {getBooks,getBooksInCart,getBooksInShelf}=this.props;
    await getBooks();
    const {user}=this.props;
    console.log("Navigaotor after getBookDetails", user);
    await getBooksInCart(user.cartID);
    console.log('shelf',user.shelfID);
    await getBooksInShelf(user.shelfID);
    const {cart,shelf}=this.props;
    console.log("Cart",cart);
    console.log("shelf",shelf);
    
  }

  render() {
    const {isNavbarOpen}=this.state;
    return (
      <div>
        <Navbar className="nav" color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNavBar}/>
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {<NavLink className="nav-link" activeClassName="active" to={routes.books}>Books</NavLink>}
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.cart}>Cart</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <WelcomePage/>
      

      

      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log("Page Navigatore",state)
  return({
    authorizedUser:state.authorizedUser,
    user:state.user,
    books:state.books,
    cart:state.cart,
    shelf:state.shelf
  })
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getBooks:bindActionCreators(getAllBooks,dispatch),
    getBooksInCart:bindActionCreators(getBooksInCart,dispatch),
    getBooksInShelf:bindActionCreators(getBooksInShelf,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PageNavigator);
// to be able to make the current component a HOC