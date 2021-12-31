import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

function MainRouter(){
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/register" component={RegisterPage} exact/>
                <Route path="/login" component={LoginPage} exact/>
            </Switch>
            <Footer></Footer>
        </Router>
    )
}

export default MainRouter;