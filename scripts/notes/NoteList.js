import { getNotes, useNotes, deleteNote } from "./NoteProvider.js";
import { useCriminals } from "../criminals/CriminalProvider.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// Listen for the delete button on saved notes
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

//Toggle Notes button was clicked..
let visibility = false;
eventHub.addEventListener("showNotesClicked", customEvent => {
    
    if (visibility === false) {
        NoteList()
        visibility = true
    } else {
        contentTarget.innerHTML = ""
        visibility = false
    }
})


// Update the DOM when the note state changes
eventHub.addEventListener("noteStateChanged", () => {
    //if it's rendered to the DOM or not?
    if (visibility === true) {
        NoteList()   
    }
})

const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter
        (note) => {
            const relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
            
            return `
            <section class="note">
                <div class="note__title"><b>Note about</b> ${ relatedCriminal.name }</div>
                <div class="note__text"><b>Note:</b> ${ note.text }</div>
                <div class="note__author"><b>Author:</b> ${ note.author }</div>
                <div class="note__timestamp"><b>Timestamp:</b> ${ new Date(note.timestamp).toLocaleDateString('en-US')  }</div>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
        }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            const criminals = useCriminals()

            render(allNotes, criminals)
        })
}