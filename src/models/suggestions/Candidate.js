import Geometry from './Geometry'
import OpeningHours from './OpeningHours'
import { getIcon } from '../../utils/functions'

class Candidate {

    constructor({ geometry, name, opening_hours = '', rating, types, business_status }) {
        this._geometry = new Geometry(geometry)
        this._name = name
        this._rating = rating
        this._opening_hours = new OpeningHours(opening_hours)
        this._types = types
    }

    get opening_hours() {
        return this._opening_hours
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

    getIcon() {
        return getIcon(this.types)
    }
    
}

export default Candidate