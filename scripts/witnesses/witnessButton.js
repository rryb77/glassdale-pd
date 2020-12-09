const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessButton")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witness") {
        const customEvent = new CustomEvent("witnessClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='witness'>Witness Statements</button>"
}