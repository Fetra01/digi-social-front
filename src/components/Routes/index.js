import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../pages/Home';


const index = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
    );
};

export default index;