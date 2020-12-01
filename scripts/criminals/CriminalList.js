import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        const theCriminals = useCriminals()
        const contentElement = document.querySelector(".criminalsContainer")

        for (const criminalObj of theCriminals) {
           const criminalHTML = Criminal(criminalObj)
           contentElement.innerHTML += criminalHTML
        }
    }    
    )   
}


