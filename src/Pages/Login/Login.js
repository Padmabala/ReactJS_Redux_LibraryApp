import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import CustomInputField from '../../CommonComponents/CustomComponents/CustomInputField.js';
import routes from '../../routes/routes';
import { setUserAuthorizationStatusAction } from '../../redux/actions/setUserAuthorizationStatusAction';
import { getUserDetails } from '../../redux/actions/userActions';

class Login extends Component{
    state={
        username:"",
        password:"",
        message:"",
        user:[]
    }
    onFieldChange=(event,targetElement)=>{
        this.setState({
            [targetElement]:event.target.value
        });
    };
    componentDidMount(){
        const {user}=this.props
        this.setState({
            user:user
        })
    }
    validateUser=async()=>{
        const {username,password}=this.state;
        const {getUserDetails,setUserAuthorizationStatus}=this.props;
        
        await getUserDetails(username,password);
        const {user}=this.props;
        
        if(Object.entries(user).length>0){
            this.setState({
                message:""
            });
            setUserAuthorizationStatus(true);           
        }
        else{
            this.setState({
                message:"Incorrect Username/Password"
            });
        }
        this.clearInputFields();   
    };
    clearInputFields=()=>{
        this.setState({
            username:"",
            password:""
        });
    }
    render(){
        const { username,password,message}=this.state;
        const {authorizedUser}=this.props;
        
    return(
        <div className="home">
            <CustomInputField customInputLabel="Username" type="text" customInputValue={username} onFieldChange={this.onFieldChange} targetElement={"username"}/>
            <CustomInputField customInputLabel="Password" type="text" customInputValue={password} onFieldChange={this.onFieldChange} targetElement={"password"}/>

            <input type="button" onClick={this.validateUser} value="Login"/>
            <p>{message}</p>
            {
                authorizedUser
                ?
                <Redirect to='/home'/>
                :
                <Redirect to='/login'/>
                
                
            }

        </div>
    );
        }
}
const mapStateToProps=(state)=>{
    return({
        authorizedUser:state.authorizedUser,
        user:state.user
    });
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getUserDetails:bindActionCreators(getUserDetails,dispatch),
        setUserAuthorizationStatus:bindActionCreators(setUserAuthorizationStatusAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);