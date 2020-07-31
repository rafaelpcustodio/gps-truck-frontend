import TripWay from './TripWay';

class Booking {

    constructor(booking) {
        this._id = booking.id
        this._passengerName = booking.passengerName
        this._passengerContactNumber = booking.passengerContactNumber
        this._pickupTime = booking.pickupTime
        this._asap = booking.asap
        this._waitingTime = booking.waitingTime
        this._noOfPassengers = booking.noOfPassengers
        this._price = booking.price
        this._rating = booking.rating


        if (Array.isArray(booking.tripWayPoints)) {
            this._tripWayPoints = booking.tripWayPoints
                .map(tripWay => new TripWay(tripWay))
        }
    }

    get id() {
        return this._id
    }

    get passengerName() {
        return this._passengerName
    }

    get passengerContactNumber() {
        return this._passengerContactNumber
    }

    get pickupTime() {
        return this._pickupTime
    }

    get asap() {
        return this._asap
    }

    get waitingTime() {
        return this._waitingTime
    }

    get noOfPassengers() {
        return this._noOfPassengers
    }

    get price() {
        return this._price
    }

    get rating() {
        return this._rating
    }

    get tripWayPoints() {
        if (this._tripWayPoints) {
            return this._tripWayPoints
        }

        return []
    }

}

export default Booking