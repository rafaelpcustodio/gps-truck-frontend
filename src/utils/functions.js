import hotelMark from '../_assets/img/icn-hotel.png'
import restaurantMark from '../_assets/img/icn-restaurant.png'
import gasStationMark from '../_assets/img/icn-gas-station.png'


const not = expression => !expression

const isNotEmpty = o => !isEmpty(o)

const isEmpty = o => {
    if (o) {
        if (o.length) {
            return !o.length
        }
        if (Object.keys(o).length) {
            return false
        }
    }
    return true
}

const getIcon = (types) => {
    return types.map(type => {
        if(type === 'lodging') {
            return hotelMark
        } else if(type === 'restaurant') {
            return restaurantMark
        } else if(type === 'gas_station') {
            return gasStationMark
        }
        return undefined;
    }).filter(type => type !== undefined)[0]
}

export {
    getIcon,
    isEmpty,
    isNotEmpty,
    not
}