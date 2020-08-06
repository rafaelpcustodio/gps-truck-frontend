import Location from './Location'

class MinimumDistance {

    constructor({ location, minimumDistance }) {
        this._location = new Location(location)
        this._minimumDistance = minimumDistance
    }

    get minimumDistance() {
        return this._minimumDistance
    }

    get location() {
        return this._location
    }

    get toGoogleMaps() {
        return this.location.toGoogleMaps
    }
}

export default MinimumDistance