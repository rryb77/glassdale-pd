import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

// Setup the eventHub to listen on the same class as the broadcast.
const eventHub = document.querySelector(".container")
// HTML location to generate data on the DOM
const contentTarget = document.querySelector(".criminalsContainer")

eventHub.addEventListener('criminalClicked', () => {
    CriminalList()
})

// Listen for the custom event that was dispatched in ConvictionSelect. Use console.log() to be sure the listener is setup properly.
eventHub.addEventListener('crimeChosen', event => {
    
    // Grab the criminal data
    let appStateCriminals = useCriminals()
    // Grab the conviction data
    let appStateCrimes = useConvictions()

    // If the property that was selected from the dropdown is NOT equal to "0" then..
    if (event.detail.crimeThatWasChosen !== "0"){
        
        // Find the unique ID and and use parseInt to convert the string into an integer
        const crime = appStateCrimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

        // Use the filter method to create a new array of criminals that meet the condition of the selected conviction
        const matchingCriminals = appStateCriminals.filter(criminal => criminal.conviction === crime.name)
        
        // Render it to the DOM
        render(matchingCriminals)
    
    // If the dropdown value is = "0" then..
    } else {
        // Render the full criminal list unfiltered.
        render(appStateCriminals)
    }
})

// Listen for the custom even dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", event => {
    
    // Grab the officer name that was chosen and store it in a variable
    const officerName = event.detail.officerThatWasChosen

    // Get the array of criminals
    const criminals = useCriminals()

    // Use the filter method to create a new array of criminals that were arrested by the selected officer.
    const matchingCriminalsByOfficer = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    // Send it to the DOM
    render(matchingCriminalsByOfficer)   
    
    // Reset the DOM to the full list if the dropdown value is equal to 0
    if (event.detail.officerThatWasChosen === "0") {
        render(criminals)
    }
})

// Function to get all information on the DOM
const render = criminalCollection => {
    //clear the DOM before rendering to only show the filtered info
    contentTarget.innerHTML = ""
    
    for (const criminalObj of criminalCollection) {
        const filterCriminalHTML = Criminal(criminalObj)
        contentTarget.innerHTML += filterCriminalHTML

    }
}

// Setup the list of criminals
export const CriminalList = () => {
    // Call getCriminals then wait for it to complete
    getCriminals().then(() => {
        // Once getCriminals is done store the data in a new array
        const theCriminals = useCriminals()
        // Send the array to the DOM
        render(theCriminals)
    })   
}