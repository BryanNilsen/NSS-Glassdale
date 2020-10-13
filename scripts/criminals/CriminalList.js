import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { criminalAsHTML } from './Criminal.js'

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals().then(() => {
        let criminalsHTMLList = ""
        useCriminals().forEach(criminal => {
            criminalsHTMLList += criminalAsHTML(criminal)
        })
        criminalsContainer.innerHTML = criminalsHTMLList;
    })
}


// ? ALTERNATIVE - This will append the DOM one criminal at a time - more parsing required for the browser
// export const CriminalList = () => {
//     getCriminals().then(criminalData => {
//         criminalData.forEach(criminal => {
//             criminalsContainer += criminalAsHTML(criminal)
//         })
//     })
// }