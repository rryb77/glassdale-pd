const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
import { saveNote } from './NoteProvider.js'

//Send the data to the stored db via the API

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        // Need to gather the data from the form
        // The .value attribute captures the text typed in those respective input element
        const author = document.querySelector("#author")
        const text = document.querySelector("#text")
        const suspect = document.querySelector("#suspect")


        // Make a new object representation of a note
        // Use the defined variables above to create key/value pairs
        const newNote = {
            // Key/value pairs here
            author: author.value,
            text: text.value,
            suspect: suspect.value,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
        author.value = ""
        text.value = ""
        suspect.value = ""
        
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <label for="author">Author:</label>
        <input type="text" id="author" placeholder="author name">
        <label for="text">Notes:</label>
        <textarea id="text" placeholder="note text"></textarea>
        <label for="suspect">Suspect:</label>
        <input type="text" id="suspect" placeholder="suspect name">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}