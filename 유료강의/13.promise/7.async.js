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

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

//! 바나나과 사과를 같이 가지고 오기, 4초걸림
async function fetchFruits() {
  const banana = await getBanana(); //resolve값 가져옴
  const apple = await getApple(); //resolve값 가져옴
  return [banana, apple]; //resolve가 생략되어 있는거지
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
