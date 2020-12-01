let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    //GET the data from the external API
    return fetch("https://criminals.glassdale.us/criminals")
        //Wait for the response to come back, and then convert to javascript data type
        .then(response => response.json())
        //Wait for the converted data, and then store it in a local array
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}

