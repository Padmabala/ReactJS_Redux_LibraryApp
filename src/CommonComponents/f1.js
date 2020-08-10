import React,{Component} from 'react';
import {
    Collapse, 
    Navbar, 
    NavbarToggler, 
    Nav, 
    NavItem,
  } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import routes from '../routes/routes';

class PageNavigator extends Component{
    state={
        isNavbarOpen:false
    }
    toggleNavBar=(event)=>{
        this.setState({
            isNavbarOpen:!this.state.isNavbarOpen
        });
    }
    render(){
        const {isNavbarOpen}=this.props;
        return(
        <div>
          <NavLink className={`btn btn-primary button`} activeClassName="active" to={routes.login}>Log Out</NavLink>  
          
          <Navbar className="nav" color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggleNavBar}/>
                <Collapse isOpen={isNavbarOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="linkColor nav-link" activeClassName="active" 
                            to={routes.books}>Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" activeClassName="active" 
                            to={routes.cart}
                            >Cart</NavLink>
                        </NavItem>                
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}
export default PageNavigator;