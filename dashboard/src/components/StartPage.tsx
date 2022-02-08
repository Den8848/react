import React from 'react';
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div className="App">
            <h1 className="App__title">Start Page</h1>

            <div className="App__buttons-wrapper">
                <div className="App__buttons">
                    <Link to="/sign-in">
                        <button className="button__sign-in">
                            Sign In
                        </button>
                    </Link>

                    <Link to="/sign-up">
                        <button className="button__sign-up">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartPage;