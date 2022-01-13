import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import EditProfile from '../pages/EditProfilePage';
import ProfilePage from '../pages/ProfilePage';
import DashboardPage from '../pages/DashboardPage';
import EventPage from '../pages/EventPage';
import AboutPage from '../pages/AboutPage';
import PenilaianPage from '../pages/PenilaianPage';
import DetailModulPage from '../pages/DetailModulPage';
import DetailTugasPage from '../pages/DetailTugasPage';
import DetailModulTektual from "../components/DetailModule/DetailModulTektual"
import PortofolioPage from "../pages/PortofolioPage";
import ModulPage from "../pages/ModulPage";
import ErrorPage from "../pages/ErrorPage";

import AuthContext from '../context/AuthContext';

function MainRouter(){
    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/register" component={RegisterPage} exact/>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/editprofile" component={EditProfile} exact/>
                <Route path="/profile" exact>
                    {loggedIn.isLoggedIn ? <ProfilePage/> : <Redirect to="/" />}
                </Route>
                <Route path="/dashboard" component={DashboardPage} exact/>
                <Route path="/eventpage" component={EventPage} exact/>
                <Route path="/about" component={AboutPage} exact/>
                <Route path="/penilaian" component={PenilaianPage} exact/>
                <Route path="/detailmodul" component={DetailModulPage} exact/>
                <Route path="/detailtugas" component={DetailTugasPage} exact/>
                <Route path="/detailmodul/modultekstual" component={DetailModulTektual} exact/>
                <Route path="/portofolio" component={PortofolioPage} exact />
                <Route path="/modul" component={ModulPage} exact />
                <Route component={ErrorPage} exact />
                
            </Switch>
            <Footer></Footer>
        </Router>
    )
}

export default MainRouter;
