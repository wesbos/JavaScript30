const inventors = [
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
];

function convertInventorsToTable(data) {
    let table = '<table>';
    table += '<tr><th>First Name</th><th>Last Name</th><th>Year</th><th>Passed</th></tr>'
    data.forEach(({ first, last, year, passed }) => {
      table += `<tr><td>${first}</td><td>${last}</td><td>${year}</td><td>${passed}</td></tr>`
    })
    table += '</table>'
    return table;
}

const renderSectionTitle = (title) => {
    const sectionTitle = document.createElement('div')
    sectionTitle.innerHTML = `<h3>${title}</h3>` 
    document.body.appendChild(sectionTitle)
}

const renderInventors = () => {
    renderSectionTitle('Original List Of Inventors')
    const originalInventorsElement = document.createElement('div')
    originalInventorsElement.innerHTML = convertInventorsToTable(inventors)
    document.body.appendChild(originalInventorsElement)
}


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterInventorsOf1500 = () => inventors.filter(({year}) => (year >= 1500 && year < 1600))


const renderFilterInventorsOf1500 = () => {
    renderSectionTitle('1. Inventors Of 1500s')

    const inventorsOf1500 = inventors.filter(({year}) => (year >= 1500 && year < 1600))
    console.table(inventorsOf1500)
    const newElement = document.createElement('div')
    newElement.innerHTML = convertInventorsToTable(inventorsOf1500)
    document.body.appendChild(newElement)
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const getArrayOfInventorsNames = () => inventors.map(({first, last}) => `${first} ${last}`)

const renderArrayOfInventorsNames = () => {
    renderSectionTitle('2. Array Of Inventors Names')
    const inventorsNames = getArrayOfInventorsNames()
    console.log({inventorsNames})
    const inventorsNamesElement = document.createElement('div')
    inventorsNamesElement.innerHTML = `<p>${inventorsNames.join('</br>')}</p>`
    document.body.appendChild(inventorsNamesElement)
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const getSortedInventors = () => inventors.sort((a, b)=> a.year < b.year ? -1 : 1)

const renderSortedInventors = () => {
    renderSectionTitle('3. Sorted Inventors By Birthdate')
    const sortedInventors = getSortedInventors()
    console.table(sortedInventors)
    const sortedInventorsElement = document.createElement('div')
    sortedInventorsElement.innerHTML = convertInventorsToTable(sortedInventors)
    document.body.appendChild(sortedInventorsElement)
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const getTotalYears = () => inventors.reduce((acc, {year, passed}) => acc + (passed - year), 0)

renderTotalYears = () => {
    renderSectionTitle('4. Total Years Lived By All Inventors')
    const totalYears = getTotalYears()
    console.log({totalYears})
    const newElement = document.createElement('div')
    newElement.innerHTML = `<p>Total years: ${totalYears}</p>`
    document.body.appendChild(newElement)
}

// 5. Sort the inventors by years lived
const getSortedByYearsLived = () => inventors.sort((a, b) => (a.passed - a.year) < (b.passed - b.year) ? -1 : 1)

renderSortedInventorsByYearsLived = () => {
    renderSectionTitle('5. Sorted Inventors By Years Lived')
    const sortedByYearsLived = getSortedByYearsLived()
    console.table(sortedByYearsLived)
    const sortedInvestorByYearElement = document.createElement('div')
    sortedInvestorByYearElement.innerHTML = convertInventorsToTable(sortedByYearsLived)
    document.body.appendChild(sortedInvestorByYearElement)
}

// CALL RENDER FUNCTIONS
renderInventors()
renderFilterInventorsOf1500()
renderArrayOfInventorsNames()
renderSortedInventors()
renderTotalYears()
renderSortedInventorsByYearsLived()