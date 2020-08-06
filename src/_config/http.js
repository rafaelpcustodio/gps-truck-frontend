import { times } from '../constants/times';

import axios from 'axios';

const API_URL = 'https://maps.googleapis.com/maps/api/place/'; // temporary

const http = axios.create({
    baseURL: API_URL,
    config: {
        timeout: times.THIRDY
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    timeout: times.THIRDY
})

export default http