const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility__button")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facility") {
        const customEvent = new CustomEvent("facilityClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowFacilityButton = () => {
    contentTarget.innerHTML = "<button id='facility'>Facility List</button>"
}