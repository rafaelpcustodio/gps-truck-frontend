import { times } from '../constants/times'

import axios from 'axios'

import { config } from './config'

const DEFAULT_PATH = config.api.baseURL

const http = axios.create({
    baseURL: DEFAULT_PATH,
    config: {
        timeout: times.THIRDY
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: times.THIRDY
})

export default http