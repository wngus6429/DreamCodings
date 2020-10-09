
// async & await
// clear style of using promise

// 1. async

// async function fetchUser() {
//   //do network request in 10 secs
//   return "ellie";
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

//한줄이 끝나야 그 다음줄로 가는 동기 처리

//2. await
// 딜레이가 끝날때가지 기다려줌
// 즉3초가 지나야 햄버거, 피자를 리턴하는 프로미스가 생겨나는거
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getbugger() {
  await delay(2000);
  return "🍔";
}

async function getPizza() {
  await delay(1000);
  return "🍕";
}

async function pickFood() {
  const hampromise = getbugger();
  const pizzapromise = getPizza();
  const ham = await hampromise();
  const pizza = await pizzapromise();
  return `${ham} + ${pizza}`;
}

async function pickFood() {
  const ham = await getbugger();
  const pizza = await getPizza();
  return `${ham} + ${pizza}`;
}

function pickFood() {
  return getbugger().then((ham) => {
    return getPizza().then((pizza) => `${ham} + ${pizza}`);
  });
}

pickFood().then(console.log);

//배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을때까지 모아줌
//다 받아진 배열이 다시 전달이 됨. 즉 food의 배열이 전달받아 지겟지.
//배열을 string으로 묶는건 join
// 3.Userful Promise APIs
function pickAllFood() {
  return Promise.all([getbugger(), getPizza()]).then((food) => food.join("+"));
}
pickAllFood().then((all) => console.log("All", all));

//둘중에 먼저 데이터 오는거
function pickOnlyOne() {
  return Promise.race([getbugger(), getPizza()]);
}

pickOnlyOne().then((race) => console.log("Race", race));

// function getPizza() {
//   return delay(3000).then(() => "🍕");
// }
