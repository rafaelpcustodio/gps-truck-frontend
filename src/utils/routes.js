import { routes } from '../_config/routes'

const combineRoutes = (...routesToCombine) => routesToCombine.reduce((allRoutes, route) => allRoutes.concat(route), [])

export { combineRoutes }
