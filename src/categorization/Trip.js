

class Trip {

    constructor(trip) {
        this._name = trip.name
        this._price = trip.price
        this._isSale = trip.isSale
    }

    get name() {
        return this._name
    }

    get price() {
        return this._price
    }

    get isSale() {
        return this._isSale
    }

}

export default Trip