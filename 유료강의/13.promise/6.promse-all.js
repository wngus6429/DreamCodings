function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}
// 바나나과 사과를 같이 가지고 오기
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => {
//         console.log('시바', apple);
//         return [banana, apple];
//       })
//   )
//   .then(console.log);
//! 결과가 4초후에 나옴[ '🍌', '🍎' ]

//! 축약버전
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
//   .then(console.log);

// 위에 저거 총 4초 걸리는데 병렬처리 하면 빨리 가능
function getOrange() {
  // return "console.log('시ㅏ')";
  return Promise.reject(new Error('no orange'));
}

// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
// .then(console.log);

//! Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
//! 위에는 4초 걸렸지만 여기서는 1초와 3초이기 때문에 3초가 걸림
//! 성공 했을때만 all
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

//! Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

//! 당연히 에러 뜬다
//! 에러 뜨니까 catch 해주는게 좋음, 다 성공해야 then으로 감
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
//! 에러가 발생한거랑, 성공한거랑 다 받아보고 싶을때
//! allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
