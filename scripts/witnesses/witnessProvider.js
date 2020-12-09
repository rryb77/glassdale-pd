let witnesses = []

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
    //GET the data from the external API
    return fetch("https://criminals.glassdale.us/witnesses")
        //Wait for the response to come back, and then convert to javascript data type
        .then(response => response.json())
        //Wait for the converted data, and then store it in a local array
        .then(
            parsedWitnesses => {
                // console.table(parsedCriminals)
                witnesses = parsedWitnesses
            }
        )
}
