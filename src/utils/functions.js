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

export {
    isEmpty,
    isNotEmpty,
    not
}