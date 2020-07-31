

class TripWay {

    constructor(tripWay) {
        this._lastStop = tripWay.lastStop
        this._locality = tripWay.locality
        this._latitude = tripWay.latitude
        this._longitude = tripWay.longitude
        this._tripWayPointTimestamp = tripWay.tripWayPointTimestamp
    }

    get lastStop() {
        return this._lastStop
    }

    get locality() {
        return this._locality
    }

    get latitude() {
        return this._latitude
    }

    get longitude() {
        return this._longitude
    }

    get tripWayPointTimestamp() {
        return this._tripWayPointTimestamp
    }

}

export default TripWay