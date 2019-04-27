import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './utils/main';
// import LandingPage from './landingPage';
import { StripeProvider } from "react-stripe-elements";

import Login from './components/Login';
// import SignUp from "./components/signUp"
import Profile from './components/profile';
import Upload from './components/upload'
// import { ReactiveBase, DataSearch, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import Register from './components/Register'
import SignIn from  './components/Login'
import Checkout from './components/Checkout.js'
import AndyProfile from './components/andy'
import ChadProfile from './components/chad'
import KarenProfile from './components/karen'
// import './App.css';


export default () => (
        <div className="container">

        <StripeProvider apiKey="pk_test_5OqAkvdfZkAygURoxEMAVHYd">
        <Router>
        <div>
            <Switch>
        <Route exact path ="/" component={SignIn} />
        
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Login" component={SignIn} />
        <Route exact path="/Profile" component={Profile} /> 
        <Route exact path="/Upload" component={Upload} />    
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Andy" component={AndyProfile} />
        <Route exact path="/Chad" component={ChadProfile} />
        <Route exact path="/Karen" component={KarenProfile} />
            </Switch>
         </div>
     </Router>
     </StripeProvider>
      </div>
    );

    