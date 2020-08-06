import { configs } from './env'

const environment = process.env.REACT_APP_ENVIRONMENT
const config = configs[environment]

export { config }