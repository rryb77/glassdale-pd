import { useOfficers, getOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerThatWasChosen: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Get all convictions from application state
    // Can't use useConvictions until getConvictions has completed. Must have .then for this.
    getOfficers().then(() => {
        const officers = useOfficers()
        render(officers)
    })
}

// Render to the DOM by passing in the convictions array from above
const render = officerCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(
                    officerObj => {
                        const valueToBeInNewArray = officerObj.name
                        return `<option>${valueToBeInNewArray}</option>`
                    }
                )
            }
        </select>
    `
}