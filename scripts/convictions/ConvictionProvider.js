//array to store all the data pulled in from the API
let convictions = []

//export a function to create a copy of the convictions array with the data from the API
export const useConvictions = () => convictions.slice()

//export a function to grab data from the API
export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
    // GET the data from the external API
    return fetch("https://criminals.glassdale.us/crimes")
        //Wait for the response and then convert the JSON data to JS friendly data.
        .then(response => response.json())
        //Once the above is completed take the data and parse it into an array of objects
        .then(
            parsedConvictions => {
                
                convictions = parsedConvictions
            }
        )
}