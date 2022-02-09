import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ROUTES from '../defaultData/routes';

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={ROUTES.HOME_PAGE} element={<StartPage/>}/>
                    <Route path={ROUTES.SIGN_IN_PAGE} element={<SignIn/>}/>
                    <Route path={ROUTES.SIGN_UP_PAGE} element={<SignUp/>}/>
                    <Route path={ROUTES.DASHBOARD_PAGE} element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default AppRoutes;