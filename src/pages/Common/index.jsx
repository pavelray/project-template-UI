import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landing/landing.component';

const Common = () => {
    return (
        <div>
        <h1>Header</h1>
            <Switch>
                <Route exact path='/home'  component={LandingPage} />
                <Route path='/'  component={LandingPage} />
            </Switch>
        </div>
    )
}

export default Common;