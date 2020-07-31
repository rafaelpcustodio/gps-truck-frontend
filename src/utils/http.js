import { CODES } from '../constants/HTTP';


const handleSuccess = ({ data }) =>  data
const responseWas = (responseCode, httpCode) => responseCode === httpCode
const responseWasOK = responseCode => responseWas(responseCode, CODES.OK);

export { handleSuccess, responseWasOK }