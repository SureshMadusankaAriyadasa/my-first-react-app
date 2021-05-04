// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import NoMatch from './pages/error/404Page'
// const App=()=>{ 
class App extends React.Component{
state={
  isLog:false,
}
 
handleLogin=(isLog)=>this.setState({isLog})
  render(){
    const {isLog}=this.state;
    return(
      <div>
        <Switch>
            {/* <Route exact path='/' component={Login}/> */}
           {!isLog ?
            <Route exact path='/' render={()=><Login isLogin={this.handleLogin}/>}/>
            :
            <Route path='/' render={() =><Home handleLogged={this.handleLogin}/> }/>
           }
            <Route path='*' component={NoMatch}/>
            {/* <Route exact path='/exp' render={()=><h1>Exp</h1>}/> */}
        </Switch>
      </div>
    )
  }
}

export default App;
