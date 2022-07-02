// Fetch the items from the JSON file
// 동적으로 받아올거임
// https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// main 메인
loadItems()
  .then((items) => {
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
