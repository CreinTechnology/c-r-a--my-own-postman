export const fetchData = (url, options = {}) => {
    const {
        startCallback = () => console.log()
    } = options

    startCallback()

    return fetch(url, )

}

export default fetchData