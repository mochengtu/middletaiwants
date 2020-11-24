import React, { FC, memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../pages/App';
import About from '../pages/About';

const routes:FC = memo(():any => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route exact={true} path="/about" component={About} />
            </Switch>
        </Router>
    );
});

export default routes;