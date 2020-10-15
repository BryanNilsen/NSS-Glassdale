import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalAsHTML } from './Criminal.js'

const contentTarget = document.querySelector(".criminalsContainer")

// export const CriminalList = () => {
//     getCriminals().then(() => {
//         let criminalsHTMLList = ""
//         useCriminals().forEach(criminal => {
//             criminalsHTMLList += criminalAsHTML(criminal)
//         })
//         criminalsContainer.innerHTML = criminalsHTMLList;
//     })
// }


// ? ALTERNATIVE - This will append the DOM one criminal at a time - more parsing required for the browser
// export const CriminalList = () => {
//     getCriminals().then(criminalData => {
//         criminalData.forEach(criminal => {
//             criminalsContainer += criminalAsHTML(criminal)
//         })
//     })
// }


const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        console.log(event.detail)
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal => criminal.conviction === event.detail.crimeThatWasChosen)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        render(matchingCriminals)
    }
})

const render = criminals => {
    let criminalsAsHTML = ""
    criminals.forEach(criminal => criminalsAsHTML += criminalAsHTML(criminal))
    contentTarget.innerHTML = criminalsAsHTML
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}