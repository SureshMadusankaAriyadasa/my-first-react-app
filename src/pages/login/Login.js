import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram_logo.svg';
import './Login.css';

class Login extends React.Component{
    state={
        email:'',
        password:'',
    }
    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.isLogin(true);
    }

    render(){
        return(
            <div className='div-logo'>
                <div className='div-login-logo'>
                    <Logo/>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='Type your email' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='Type your password' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;