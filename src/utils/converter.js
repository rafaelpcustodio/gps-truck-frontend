

const convertDateTime = time => {
    return new Date(time).toLocaleDateString() + " " + new Date(time).toLocaleTimeString()
}

export default convertDateTime