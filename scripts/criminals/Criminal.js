export const criminalAsHTML = (criminal) => {
    return `<article class="criminal">
    <h2>${criminal.name}</h2>
    <div>${criminal.age}</div>
    <div>${criminal.conviction}</div>
    <div>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </article>`
}