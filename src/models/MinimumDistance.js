import Location from './Location'

class MinimumDistance {

    constructor({ location, minimumDistance }) {
        this._location = new Location(location)
        this._distance = minimumDistance
    }

    get distance() {
        return this._distance
    }

    get location() {
        return this._location
    }

    get toGoogleMaps() {
        return this.location.toGoogleMaps
    }
}

export default MinimumDistance