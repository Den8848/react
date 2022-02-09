import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const Navigate = useNavigate();
    const RootUrl = '/';

    return (
        <div>
            <h2 className="title">Dashboard Page</h2>

            <div className="button__wrapper">
                    <button type="submit" className="button__exit" onClick={() => {Navigate(RootUrl)}}>Exit</button>
            </div>
        </div>
    );
};

export default Dashboard;