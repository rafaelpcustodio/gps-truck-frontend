
const arrayToString = a => a.map(item => JSON.stringify(item)).join('')

const compareArray = (a1, a2) => arrayToString(a1) === arrayToString(a2)

export { arrayToString, compareArray }
