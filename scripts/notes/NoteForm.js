const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text">
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a criminal...</option>
        </select>
            <input type="date" id="note-date" name="date">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}