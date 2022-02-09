import React from 'react';
import { useNavigate } from "react-router-dom";
import ROUTES from '../defaultData/routes';

const StartPage = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1 className="App__title">Start Page</h1>

            <div className="App__buttons-wrapper">
                <div className="App__buttons">
                    <button
                        className="button__sign-in"
                        onClick={() => {navigate(ROUTES.SIGN_IN_PAGE)}}>
                        Sign In
                    </button>

                    <button
                        className="button__sign-up"
                        onClick={() => {navigate(ROUTES.SIGN_UP_PAGE)}}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;