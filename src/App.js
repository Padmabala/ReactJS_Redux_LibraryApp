import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Route,NavLink,withRouter} from 'react-router-dom';
import routes from './routes/routes';

import PageNavigator from './CommonComponents/PageNavigator';
import WelcomePage from './CommonComponents/WelcomePage';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import Cart from './Pages/Cart/Cart';

class App extends Component{
  componentDidMount(){
    const {history,location}=this.props;
    // if(location.pathname==='/'){
    //   history.push(routes.welcome);
    // }
  }
    render(){
      const{authorizedUser}=this.props
      return(
       <div className="App">
       {
       authorizedUser
       ?
       
       <div>
         {/* <NavLink className={`btn btn-primary button`} activeClassName="active" to={routes.login}>Log Out</NavLink>   */}
         
         
       </div>
       :
       <div>    
         <NavLink className={`btn btn-primary button`} activeClassName="active" to={routes.login}>Log In</NavLink>
           
      </div>
       }
     <Route path={routes.login} component={Login}/>
     
     <Route path={routes.home} component={PageNavigator}/>
     <Route path={routes.books} component={Books}/>
     <Route path={routes.cart} component={Cart}/>
      
     {/* <Route path={routes.welcome} component={WelcomePage}/> */}
     </div>
      );
    }
    
}
const mapStateToProps=(state)=>{
  return({
    authorizedUser:state.authorizedUser
  })

}
export default connect(mapStateToProps)(withRouter(App));
