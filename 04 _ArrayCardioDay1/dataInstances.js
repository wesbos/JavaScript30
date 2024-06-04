// 8. Reduce Exercise
    // Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const getSumUpForInstances = () => data.reduce((acc, current) => {
    return {
    ...acc, 
    [current]: acc[current] ? acc[current] + 1 : 1} 
},{})

renderSumUpForInstances = () => {
    const sumUpForInstances = getSumUpForInstances()
    console.table(sumUpForInstances)
    const newElement = document.createElement('div')
    newElement.innerHTML = `<p>${JSON.stringify(sumUpForInstances)}</p>`
    document.body.appendChild(newElement) 
}

renderOriginalData = () => {
    const originalDataElement = document.createElement('div')
    originalDataElement.innerHTML = `<p>${data.join(' , ')}</p>`
    document.body.appendChild(originalDataElement)
}

renderOriginalData()
renderSumUpForInstances()