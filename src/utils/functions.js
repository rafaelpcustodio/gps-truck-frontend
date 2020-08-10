import hotelMark from '../_assets/img/icn-hotel.png'
import restaurantMark from '../_assets/img/icn-restaurant.png'
import gasStationMark from '../_assets/img/icn-gas-station.png'
import hotelAndRestaurantMark from '../_assets/img/icn-hotel-restaurant.png'


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
    if(types.includes('restaurant') && types.includes('lodging')) {
        return hotelAndRestaurantMark
    } else if(types.includes('gas_station')) {
        return gasStationMark
    }  else if(types.includes('restaurant')) {
        return restaurantMark
    }
    else if(types.includes('lodging') && !types.includes('restaurant')) {
        return hotelMark
    } 
} 
export {
    getIcon,
    isEmpty,
    isNotEmpty,
    not
}