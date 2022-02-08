import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2 className="title">Dashboard Page</h2>

            <div className="button__wrapper">
                <Link to="/">
                    <button type="submit" className="button__exit">Exit</button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;