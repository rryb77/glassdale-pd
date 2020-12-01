let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    //GET the data from the external API
    return fetch("https://criminals.glassdale.us/officers")
        //Wait for the response to come back, and then convert to javascript data type
        .then(response => response.json())
        //Wait for the converted data, and then store it in a local array
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}