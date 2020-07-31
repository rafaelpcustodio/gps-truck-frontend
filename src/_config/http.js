import { times } from '../constants/times';

import axios from 'axios';

const API_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/'; // temporary

const http = axios.create({
    baseURL: API_URL,
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