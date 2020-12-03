import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    contentTarget.innerHTML = ""
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
        render(appStateCriminals)
    }
})

const render = criminalCollection => {
    
    
    for (const criminalObj of criminalCollection) {
        const filterCriminalHTML = Criminal(criminalObj)
        contentTarget.innerHTML += filterCriminalHTML

    }
    // contentTarget.innerHTML = filterCriminalHTML
    // console.log(criminalCollection)
}

export const CriminalList = () => {
    getCriminals().then(() => {
        const theCriminals = useCriminals()
        const contentElement = document.querySelector(".criminalsContainer")

        for (const criminalObj of theCriminals) {
           const criminalHTML = Criminal(criminalObj)
           contentElement.innerHTML += criminalHTML
        }
    }    
    )   
}