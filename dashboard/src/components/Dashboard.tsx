import React from 'react';
import { useNavigate } from "react-router-dom";
import ROUTES from "../defaultData/routes";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2 className="title">Dashboard Page</h2>

            <div className="button__wrapper">
                    <button type="submit" className="button__exit" onClick={() => {navigate(ROUTES.HOME_PAGE)}}>Exit</button>
            </div>
        </div>
    );
};

export default Dashboard;