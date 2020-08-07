import { connect } from 'react-redux';

import Gps from '../pages/Gps';


import {
    requestGetLocationsAction,
    requestGetSuggestionsAction,
    requestPoiTypesAction,
    requestResetLocationsAction,
    requestResetMinimumDistanceAction,
    requestResetSuggestionsAction,
    requestSetLicensePlateSelectedAction,
    requestSetRadiusSelectedAction,
    requestSetNoLocationsAction,
    requestSetPoiTypeSelectedAction
} from '../actions'

import {
    getLicensePlateSelectedSelector,
    getListPoiTypeSelector,
    getMinimumDistanceSelector,
    getNoLocationsSelector,
    getLocationsListSelector,
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
    radiusSelected: getRadiusSelectedSelector(state),
    suggestionsList: getSuggestionsListSelector(state),
    locationsList: getLocationsListSelector(state),
})

const mapDispatchToProps = {
    requestGetLocationsAction,
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