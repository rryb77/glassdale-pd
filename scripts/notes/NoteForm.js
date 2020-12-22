const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { saveNote } from './NoteProvider.js'

//Send the data to the stored db via the API

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        // Need to gather the data from the form
        // The .value attribute captures the text typed in those respective input element
        const author = document.querySelector("#author")
        const text = document.querySelector("#text")
        const selectedCriminalId = document.querySelector('#noteForm--criminal')

        // Make a new object representation of a note
        // Use the defined variables above to create key/value pairs
        const newNote = {
            // Key/value pairs here
            author: author.value,
            text: text.value,
            timestamp: Date.now(),
            criminalId: parseInt(selectedCriminalId.value)

        }

        // Change API state and application state
        saveNote(newNote)
        // Clear out the form
        author.value = ""
        text.value = ""
        selectedCriminalId.value = 1
        
    }
})

export const CriminalSelect = () => {
    // Get all convictions from application state
    // Can't use useConvictions until getConvictions has completed. Must have .then for this.
    getCriminals().then(() => {
        const criminalCollection = useCriminals()
        render(criminalCollection)
    })
}

const render = (criminalCollection) => {
    contentTarget.innerHTML = `
    <div class="noteForm">
        <label for="author">Author:</label>
            <input type="text" id="author" placeholder="author name">
        <label for="text">Notes:</label>
            <textarea id="text" placeholder="note text"></textarea>
        <select id="noteForm--criminal" class="criminalSelect">
                ${
                    criminalCollection.map(
                        criminalObj => {
                            return `<option value="${ criminalObj.id }" class="criminalSelection">${ criminalObj.name }</option>`
                        }
                    )
                }    
        </select>
        <button id="saveNote">Save Note</button>
    </div>
    `
}

export const NoteForm = () => {
    render()
}