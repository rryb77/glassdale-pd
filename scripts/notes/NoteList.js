// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    // rest of the code here
}