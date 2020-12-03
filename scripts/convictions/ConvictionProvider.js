let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
    // GET the data from the external API
    return fetch("https://criminals.glassdale.us/crimes")
        //Wait for the response and then convert the JSON data to JS
        .then(response => response.json())
        //Take the data and parse it into an array of objects
        .then(
            parsedConvictions => {
                // console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}