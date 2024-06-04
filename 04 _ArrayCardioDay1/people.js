const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
 

// 7. sort Exercise
// Sort the people alphabetically by last name
const getSortedPeople = () => people.sort((a, b)=> a < b ? -1 : 1)

const renderSortedPeople = () => {
    const sortedPeople = getSortedPeople()
    console.log({sortedPeople})
    const sortedPeopleElement = document.createElement('div')
    sortedPeopleElement.innerHTML = `<p>${sortedPeople.join('</br>')}</p>`
    document.body.appendChild(sortedPeopleElement)
}


renderSortedPeople()