import React from 'react';
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const Navigate = useNavigate();
    const SignInUrl = '/sign-in';
    const SignUpUrl = '/sign-up';

    return (
        <div className="App">
            <h1 className="App__title">Start Page</h1>

            <div className="App__buttons-wrapper">
                <div className="App__buttons">
                    <button
                        className="button__sign-in"
                        onClick={() => {Navigate(SignInUrl)}}>
                        Sign In
                    </button>

                    <button
                        className="button__sign-up"
                        onClick={() => {Navigate(SignUpUrl)}}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;