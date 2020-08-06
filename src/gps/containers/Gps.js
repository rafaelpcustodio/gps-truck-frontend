import { connect } from 'react-redux';

import Gps from '../pages/Gps';


import {
    requestGetLocationAction,
    requestGetTruckLocationsAction,
    requestPoiTypesAction,
    requestSetLicensePlateSelectedAction,
    requestResetLocationsAction,
    requestResetMinimumDistanceAction,
    requestResetSuggestionsAction,
    requestSetRadiusSelectedAction,
    requestSetNoLocationsAction,
    requestGetSuggestionsAction,
    requestSetPoiTypeSelectedAction
} from '../actions'

import {
    getLicensePlateSelectedSelector,
    getListPoiTypeSelector,
    getListRadiusSelector,
    getMinimumDistanceSelector,
    getNoLocationsSelector,
    getTruckLocationsListSelector,
    getRadiusSelectedSelector,
    getPoiTypeSelectedSelector,
    getSuggestionsListSelector
} from '../selectors'

const mapStateToProps = state => ({
    licensePlateSelected: getLicensePlateSelectedSelector(state),
    minimumDistance: getMinimumDistanceSelector(state),
    noLocations: getNoLocationsSelector(state),
    poiTypeList: getListPoiTypeSelector(state),
    poiTypeSelected: getPoiTypeSelectedSelector(state),
    radiusList: getListRadiusSelector(state),
    radiusSelected: getRadiusSelectedSelector(state),
    suggestionsList: getSuggestionsListSelector(state),
    truckLocations: getTruckLocationsListSelector(state),
})

const mapDispatchToProps = {
    requestGetLocationAction,
    requestGetTruckLocationsAction,
    requestPoiTypesAction,
    requestSetNoLocationsAction,
    requestSetLicensePlateSelectedAction,
    requestResetLocationsAction,
    requestResetMinimumDistanceAction,
    requestResetSuggestionsAction,
    requestSetPoiTypeSelectedAction,
    requestSetRadiusSelectedAction,
    requestGetSuggestionsAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Gps)