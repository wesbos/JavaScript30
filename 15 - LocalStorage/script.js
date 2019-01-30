const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const deleteButton = document.querySelector('.delete-button');

function addItem(e) {
    e.preventDefault(); //stops the page from reloading
    const text = (this.querySelector('[name=item]')).value; //this - the form
    const item = {
      text: text,
      done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    console.log(item);
    this.reset();
  }

  //dafault for plates - empty just in case you forget to pass it
  const populateList = (plates = [], platesList) => {

    platesList.innerHTML = plates.map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>

      `
    }).join(''); 
  }


  const toggleDone = (e) => {
    if (!e.target.matches('input')) return; //skip this unless its an input
    const el = e.target;
    console.log(el.dataset.index);
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);


  }

  const deleteAll = () => {
   while (items.length) {
    items.pop();
  }
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
deleteButton.addEventListener('click', deleteAll);
populateList(items, itemsList);