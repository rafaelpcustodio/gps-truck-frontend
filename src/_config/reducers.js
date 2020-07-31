import { combineReducers } from 'redux-immutable';

import { reducers as gpsReducers } from '../gps/reducers';
import { connectRouter } from 'connected-react-router';

const reducers = (history) => combineReducers({
    gpsReducers,
    router: connectRouter(history)
})

export { reducers }
