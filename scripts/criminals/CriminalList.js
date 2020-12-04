import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    let appStateCriminals = useCriminals()

    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter(crime => crime.conviction === event.detail.crimeThatWasChosen)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        render(matchingCriminals)

    } else {
        //render the full criminal list unfiltered.
        render(appStateCriminals)
    }
})

// Listen for the custom even dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    
    const officerName = event.detail.officerThatWasChosen
    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const matchingCriminalsByOfficer = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    render(matchingCriminalsByOfficer)    
})

const render = criminalCollection => {
    //clear the DOM before rendering to only show the filtered info
    contentTarget.innerHTML = ""
    
    for (const criminalObj of criminalCollection) {
        const filterCriminalHTML = Criminal(criminalObj)
        contentTarget.innerHTML += filterCriminalHTML

    }
}

export const CriminalList = () => {
    getCriminals().then(() => {
        const theCriminals = useCriminals()
        render(theCriminals)
    })   
}