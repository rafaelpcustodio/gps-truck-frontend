import Geometry from './Geometry'
import { getIcon } from '../../utils/functions'

class Candidate {

    constructor({ geometry, name, rating, types }) {
        this._geometry = new Geometry(geometry)
        this._name = name
        this._rating = rating
        this._types = types
    }

    get geometry() {
        return this._geometry
    }

    get name() {
        return this._name
    }

    get rating() {
        return this._rating
    }

    get types() {
        return this._types
    }

    get toCandidateLocationDTO() {
        return {
            latitude: this.geometry.location.lat(),
            longitude: this.geometry.location.lng()
        }
    }

    get toGoogleMaps() {
        return {
            lat: this.geometry.location.lat(),
            lng: this.geometry.location.lng()
        }
    }

    getIcon() {
        return getIcon(this.types)
    }
    
}

export default Candidate