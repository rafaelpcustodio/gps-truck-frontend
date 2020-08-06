class OpeningHours {

    constructor({ open_now = '' }) {
        this._open_now = open_now
    }

    get open_now() {
        return this._open_now
    }
}

export default OpeningHours