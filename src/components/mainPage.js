import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../App';


const MainPage = () => (
    <Switch>
        <Route path="/App" component={App} />
    </Switch>

)

export default MainPage;