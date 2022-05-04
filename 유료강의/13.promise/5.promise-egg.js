function fetchEgg(chicken) {
  console.log('chicken', chicken);
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  console.log('egg', egg);
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  // return Promise.resolve(`화분 => 🐓`);
}
//치킨 가져오는데 실패하면 기본 치킨 사용
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg) //! 축약버전2
  // .then((chiken) => fetchEgg(chicken) //! 축약버전1
  .then(fryEgg)
  .then(console.log);

// //! 축약 안한버전
// getChicken()
//   .catch((error) => {
//     console.log(error.name);
//     return '🐔';　//에러나면 이 치킨을 사용 한다는것임.
//   })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));

// getChicken()
//   .then((chiken) => {
//     return fetchEgg(chiken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));
// 화분 => 🐓 => 🥚 => 🍳

// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => 🥚`);
// }

// fetchEgg('🐔').then((egg) => console.log(egg));
// // 🐔 => 🥚
