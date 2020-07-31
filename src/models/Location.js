class Location {

    constructor({ latitude, longitude }) {
        this._lat= latitude
        this._lng = longitude
    }

    get lat() {
        return this._lat
    }

    get lng() {
        return this._lng
    }

    get googleGpsLocation() {
        return {lat: this._lat, lng: this._lng}
    }
}

export default Location
