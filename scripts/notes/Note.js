export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="note__title"><b>The Suspect:</b> ${ criminalObject.name }</div>
            <div class="note__text"><b>Note:</b> ${ noteObject.text }</div>
            <div class="note__author"><b>Author:</b> ${ noteObject.author }</div>
            <div class="note__timestamp"><b>Timestamp:</b> ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
        </section>
    `
}