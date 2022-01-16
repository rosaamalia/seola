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
                <Route path="/register" component={RegisterPage} exact>
                    {loggedIn.isLoggedIn ? <Redirect to="/" /> : <RegisterPage/>}
                </Route>
                <Route path="/login" component={LoginPage} exact>
                    {loggedIn.isLoggedIn ? <Redirect to="/" /> : <LoginPage/>}
                </Route>
                <Route path="/editprofile" exact>
                    {loggedIn.isLoggedIn ? <EditProfile/> : <Redirect to="/" />}
                </Route>
                <Route path="/profile" exact>
                    {loggedIn.isLoggedIn ? <ProfilePage/> : <Redirect to="/" />}
                </Route>
                <Route path="/dashboard" exact>
                    {loggedIn.isLoggedIn ? <DashboardPage/> : <Redirect to="/" />}
                </Route>
                <Route path="/eventpage" component={EventPage} exact/>
                <Route path="/about" component={AboutPage} exact/>
                <Route path="/modul/:id/tugas/nilai" component={PenilaianPage} exact>
                    {loggedIn.isLoggedIn ? <PenilaianPage/> : <Redirect to="/" />}
                </Route>
                <Route path="/modul" exact>
                    {loggedIn.isLoggedIn ? <ModulPage/> : <Redirect to="/" />}
                </Route>
                <Route path="/modul/:id" exact>
                    {loggedIn.isLoggedIn ? <DetailModulPage/> : <Redirect to="/" />}
                </Route>
                <Route path="/modul/:id/tugas" exact>
                    {loggedIn.isLoggedIn ? <DetailTugasPage/> : <Redirect to="/" />}
                </Route>
                <Route path="/modul/:id/teks" exact>
                    {loggedIn.isLoggedIn ? <DetailModulTektual/> : <Redirect to="/" />}
                </Route>
                <Route path="/portofolio" component={PortofolioPage} exact>
                    {loggedIn.isLoggedIn ? <PortofolioPage/> : <Redirect to="/" />}
                </Route>
                <Route component={ErrorPage} exact />
            </Switch>
            <Footer></Footer>
        </Router>
    )
}

export default MainRouter;
