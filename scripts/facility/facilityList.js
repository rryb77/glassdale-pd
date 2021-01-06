import { getFacilities, useFacilities } from './FacilityProvider.js'
import { Facility } from './facility.js'
import { CriminalList } from '../criminals/CriminalList.js'
import { useCriminals } from '../criminals/CriminalProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'

// Setup the eventHub to listen on the same class as the broadcast.
const eventHub = document.querySelector(".container")
// HTML location to generate data on the DOM
const contentTarget = document.querySelector(".facilityContainer")
const criminalTarget = document.querySelector(".criminalsContainer")

let facilityShown = false;
// Listen for the custom event that was dispatched in ConvictionSelect. Use console.log() to be sure the listener is setup properly.
eventHub.addEventListener('facilityClicked', () => {
    // Grab the witness data
    let theFacilities = useFacilities()
    if (facilityShown === false) {
        criminalTarget.innerHTML = ""
        getFacilities()
            .then(getCriminalFacilities)
            .then(
                () => {
            // Once getWitnesses is done store the data in a new array
            const theFacilities = useFacilities()
            const theCriminals = useCriminals()
            const theCriminalFacilities = useCriminalFacilities()

            // Send the array to the DOM
            // render(theFacilities)
            facilityShown = true
            render(theCriminals, theFacilities, theCriminalFacilities)
        }) 

    } else {
        contentTarget.innerHTML = ""
        facilityShown = false;
        CriminalList()
    }
    
    
})

const render = (theCriminals, theFacilities, theCriminalFacilities) => {
    //clear the DOM before rendering to only show the filtered info
    contentTarget.innerHTML = theFacilities.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const criminalRelationshipForThisFacility = theCriminalFacilities.filter(cf => cf.facilityId === facilityObject.id)
            console.log('Criminal Relationships: ',criminalRelationshipForThisFacility)
            // Step 3 - Convert the relationships to facilities with map()
            const criminals = criminalRelationshipForThisFacility.map(cf => {
                const matchingCriminalObject = theCriminals.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })
            console.log('Facility Object: ', facilityObject)
            console.log(criminals)
            // Must pass the matching facilities to the Criminal component
            return Facility(facilityObject, criminals)
        }
    ).join("")
}

// Setup the list of criminals
export const FacilityList = () => {
    // Call getCriminals then wait for it to complete
    getFacilities().then(() => {
        // Once getWitnesses is done store the data in a new array
        const theFacilities = useFacilities()
        // Send the array to the DOM
        // render(theFacilities)
    })   
}