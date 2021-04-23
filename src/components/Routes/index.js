import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';


const index = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    );
};

export default index;