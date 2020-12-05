/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

// Setup the eventHub listener on <main class="container">
const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name. In this case I'm broadcasting "crimeChosen"
        const customEvent = new CustomEvent("crimeChosen", {
            // this will ALWAYS be "detail:""
            detail: {
                //set crimeThatWasChosen with the value of the event
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {
    // Get all convictions from application state
    // Can't use useConvictions until getConvictions has completed. Must have .then for this.
    getConvictions().then(() => {
        const convictions = useConvictions()
        render(convictions)
    })
}

// Render to the DOM by passing in the convictions array from above
const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(
                    convictionObj => {
                        const valueToBeInNewArray = convictionObj.name
                        return `<option value=${convictionObj.id}>${valueToBeInNewArray}</option>`
                    }
                )
            }
        </select>
    `
}