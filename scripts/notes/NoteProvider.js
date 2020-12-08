const eventHub = document.querySelector(".container")
let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () => notes.slice()

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        //Using GET by default
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        //POST is used to post new data
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //Take the object passed in to saveNote and convert it to JSON via the JSON.stringify method.
        body: JSON.stringify(note)
    })
    // Get the updated state to match the application state
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}