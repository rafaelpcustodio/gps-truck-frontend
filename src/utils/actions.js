import { createAction as reduxCreateAction } from 'redux-actions';

const createAction = name => reduxCreateAction(`${name.toUpperCase()}`)
const getAction = name => `${name.toUpperCase()}`

export { createAction, getAction }