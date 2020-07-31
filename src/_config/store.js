import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import { sagas } from './sagas';

import { history } from './history';
import { reducers } from './reducers';

import { Map } from 'immutable';


const sagaMiddleware = createSagaMiddleware()
const initialState = Map({})
const enhancers = []
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

const store = createStore(
    reducers(history),
    initialState,
    compose(
        composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    )
)

sagaMiddleware.run(sagas)

export { store }