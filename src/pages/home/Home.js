import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Explore from '../../Components/Explore/Explore';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestion/Suggestion';
import Profile from '../Profile/Profile';
import './Home.css';
import Albums from '../../Components/Albums/Albums';
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <Switch>
                {/* <Route exact path='/' component={NewHome}/> */}
                <Route exact path='/explore' component={Explore}/>
                <Route path='/:username' component={Profile}/>
            </Switch>
            <div className='div-home'>
                <Suggestions/>
                <Albums/>
                <Feeds/>

            </div>
        </div>
    )
}

export default Home;