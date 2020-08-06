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

    get toGoogleMaps() {
        return {
            lat: this.lat,
            lng: this.lng
        }
    }

    get toDTO() {
        return {
            latitude: this.lat,
            longitude: this.lng
        }
    }
}

export default Location
