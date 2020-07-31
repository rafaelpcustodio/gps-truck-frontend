import { createHashHistory } from 'history'

const history = createHashHistory({
    basename: '',
    forceRefresh: false
})

export { history }