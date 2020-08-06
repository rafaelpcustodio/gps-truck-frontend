const combineRoutes = (...routesToCombine) => routesToCombine.reduce((allRoutes, route) => allRoutes.concat(route), [])

export { combineRoutes }
