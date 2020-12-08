import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")
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

eventHub.addEventListener("noteStateChanged", () => {
    //if it's rendered to the DOM or not?
    if (visibility === true) {
        NoteList()   
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter
        (note) => {
            return NoteHTMLConverter(note)
        }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            debugger
            const allNotes = useNotes()
            render(allNotes)
        })
}