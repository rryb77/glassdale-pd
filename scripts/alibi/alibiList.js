import { useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dialogTest")
const dialogToggle = document.getElementById("myDialog"); 

//close dialog so it isn't showing on first render
dialogToggle.close()

//show AlibiClicked
eventHub.addEventListener("showAlibiClicked", customEvent => {
    let criminals = useCriminals()
    const criminal = criminals.find( (criminal) => criminal.id === customEvent.detail.criminalID)
    
    //close dialog if another is open
    dialogToggle.close()

    //Loop through known associates to add them to the DOM with their alibi
    for (let i=0; i < criminal.known_associates.length; i++) {
        contentTarget.innerHTML += `<div class="note__alibi"><b>Known Associate:</b> ${ criminal.known_associates[i].name }  <p><b>Alibi:</b> ${criminal.known_associates[i].alibi }<br><br></div>`
    }  

    //Add the close button to the dialog after the loop is finished
    contentTarget.innerHTML += `<button id="closeDialog">Close</button>`
    //show the dialog
    dialogToggle.showModal()
    
})

//Dialog close button was clicked
eventHub.addEventListener("closeDialogClicked", customEvent => {
    //close and reset the innerHTML
    dialogToggle.close()
    contentTarget.innerHTML = ""
})