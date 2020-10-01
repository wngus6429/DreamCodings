/** @format */

"use strict";

//Promise is a Javascript object for asynchronous operation.

// 첫번째는 상태에 대해서 이해하는게 중요 state
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files) 이런건 비동기가 좋음
  console.log("doing something...");
  setTimeout(() => {
    //resolve("ellie");
    reject(new Error("No network")); //Error 자스에서 제공하는 오브젝트
  }, 2000);
});

// 2. Consumers: then, catch, finally
// then은 promise가 정상적으로 끝나면 작동
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

console.clear();
//3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("👀"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error! ${hen} => 🎂`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🐱‍🏍`), 1000);
  });

getHen() //한가지만 받아서 고대로 전달하면 () 생략이 가능
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
