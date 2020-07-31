import { all } from 'redux-saga/effects';

import { sagas as gpsSagas } from '../gps/sagas';

function* sagas() {
    yield all([
        gpsSagas()
    ]);
}

export { sagas }