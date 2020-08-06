import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';

import { combineRoutes } from '../utils/routes';

import { routes as bookingRoutes } from '../gps/routes';

import { history } from './history';
import { store } from './store';

const systemRoutes = combineRoutes(
    bookingRoutes
)

const Routes = () => (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                { systemRoutes.map((route, index) => 
                <Route { ...route } exact key={ index }/>) }
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export default Routes