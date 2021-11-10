export const fetchData = (url, options = {}) => {
    const {
        startCallback = () => console.log(`${url} Start fetching`),
        catchCallback = (error) => console.error('Failed', error),
        successCallback = (data) => console.log('Fetched', data),
        endCallback = () => console.log(`${url} Stop fetching`),
        responseTransformFn = 'json',
        ...fetchOptions
    } = options

    startCallback()
    return fetch(url, fetchOptions)
        .then((response) => {
            if (response.status < 200 || response.status > 299) {
                throw new Error(response.status)
            }
            return response
        })
        .then((response) => response[responseTransformFn]())
        .then(successCallback)
        .then(catchCallback)
        .finally(endCallback)
}
export default fetchData