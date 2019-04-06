import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <Route path="/" component={Home} />
        </Router>
    );
};

export default AppRouter;