const configs = {
    local: {
        api: {
            baseURL: 'http://localhost:8080',
            GoogleMapKEY: process.env.REACT_APP_GOOGLE_API_KEY
        }
    },
    development: {
        api: {
            baseURL: 'http://development',
            GoogleMapKEY: process.env.REACT_APP_GOOGLE_API_KEY
        }
    },
    production: {
        api: {
            baseURL: 'http://production',
            GoogleMapKEY: process.env.REACT_APP_GOOGLE_API_KEY
        }
    }
}

export { configs }