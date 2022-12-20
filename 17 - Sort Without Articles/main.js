/*-------------- Renaud Vmb --------------*/

const ul = document.getElementById('bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

ul.innerHTML = bands.map(band => `<li>${band}</li>`).join('');