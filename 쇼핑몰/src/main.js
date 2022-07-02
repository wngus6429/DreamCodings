// Fetch the items from the JSON file
// 동적으로 받아올거임
// https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  const html = items.map((item) => createHTMLString(item));
  console.log('확인용', html);
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  const filterd = items.filter((item) => item[key] === value);
  console.log(filterd);
  displayItems(filterd);
  // console.log(event.target.dataset.key);
  // console.log(event.target.dataset.value);
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}
// main 메인
loadItems()
  .then((items) => {
    console.log('아이템', items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
