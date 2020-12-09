const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("associates--")) {

        const matchingCriminal = clickEvent.target.id.split("--")
        const criminalID = parseInt(matchingCriminal[1])

        const customEvent = new CustomEvent("showAlibiClicked", {
            // this will ALWAYS be "detail:""
            detail: {
                criminalID: criminalID
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "closeDialog") {

        const customEvent = new CustomEvent("closeDialogClicked", {
            
        })
        eventHub.dispatchEvent(customEvent)
    }
})