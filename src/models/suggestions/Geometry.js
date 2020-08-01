import CandidateLocation from './CandidateLocation'

class Geometry {

    constructor({ location }) {
        this._location = new CandidateLocation(location)
    }

    get location() {
        return this._location
    }
}

export default Geometry