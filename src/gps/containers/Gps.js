import { connect } from 'react-redux';

import Gps from '../pages/Gps';


import {
    requestGetLocationAction,
    requestGetTruckLocationsAction,
    requestPoiTypesAction,
    requestRadiusAction,
    requestSetLicensePlateSelectedAction,
    requestSetLocationAction,
    requestSetRadiusSelectedAction,
    requestGetSuggestionsAction,
    requestSetPoiTypeSelectedAction
} from '../actions'

import {
    getLicensePlateSelectedSelector,
    getListPoiTypeSelector,
    getListRadiusSelector,
    getMinimumDistanceSelector,
    getTruckLocationsListSelector,
    getRadiusSelectedSelector,
    getPoiTypeSelectedSelector,
    getSuggestionsListSelector
} from '../selectors'

const mapStateToProps = state => ({
    licensePlateSelected: getLicensePlateSelectedSelector(state),
    minimumDistance: getMinimumDistanceSelector(state),
    truckLocations: getTruckLocationsListSelector(state),
    poiTypeList: getListPoiTypeSelector(state),
    poiTypeSelected: getPoiTypeSelectedSelector(state),
    radiusList: getListRadiusSelector(state),
    radiusSelected: getRadiusSelectedSelector(state),
    suggestionsList: getSuggestionsListSelector(state)
})

const mapDispatchToProps = {
    requestGetLocationAction,
    requestGetTruckLocationsAction,
    requestPoiTypesAction,
    requestRadiusAction,
    requestSetLicensePlateSelectedAction,
    requestSetLocationAction,
    requestSetRadiusSelectedAction,
    requestGetSuggestionsAction,
    requestSetPoiTypeSelectedAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Gps)