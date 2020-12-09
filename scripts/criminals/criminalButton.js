const criminalButtonTarget = document.querySelector(".criminalButton")
const eventHub = document.querySelector(".container")

export const ShowCriminalButton = () => {
    criminalButtonTarget.innerHTML = "<button id='criminal'>Criminal List</button>"
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "criminal") {
        console.log('Dispatching event criminalClicked')
        const customEvent = new CustomEvent("criminalClicked")
        eventHub.dispatchEvent(customEvent)
    }
})