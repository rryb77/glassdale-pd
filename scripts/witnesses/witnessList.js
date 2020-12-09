import { getWitnesses, useWitnesses } from './witnessProvider.js'
import { Witness } from './witnesses.js'
import { CriminalList } from '../criminals/CriminalList.js'

// Setup the eventHub to listen on the same class as the broadcast.
const eventHub = document.querySelector(".container")
// HTML location to generate data on the DOM
const contentTarget = document.querySelector(".criminalsContainer")
const witnessToggle = document.getElementById("witness"); 

let witnessShown = false;
// Listen for the custom event that was dispatched in ConvictionSelect. Use console.log() to be sure the listener is setup properly.
eventHub.addEventListener('witnessClicked', () => {
    // Grab the witness data
    let theWitnesses = useWitnesses()
    if (witnessShown === false) {
        render(theWitnesses)
        witnessShown = true

    } else {
        CriminalList()
        witnessShown = false;
    }
    
    
})

// Function to get all information on the DOM
const render = witnessCollection => {
    //clear the DOM before rendering to only show the filtered info
    contentTarget.innerHTML = ""
    
    for (const witnessObj of witnessCollection) {
        const filterWitnessHTML = Witness(witnessObj)
        contentTarget.innerHTML += filterWitnessHTML

    }
}

// Setup the list of criminals
export const WitnessList = () => {
    // Call getCriminals then wait for it to complete
    getWitnesses().then(() => {
        // Once getWitnesses is done store the data in a new array
        const theWitnesses = useWitnesses()
        // Send the array to the DOM
        // render(theWitnesses)
    })   
}