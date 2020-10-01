/** @format */

"use strict";

// Javascript is synchronous. 동기
//Execute the code block by orger after hoisting.
//호이스팅은 : var, function declaration이 자동적으로 제일 위로 올라감
//콜백 함수는 우리가 전달한 함수를 나중에 니가 불러줘.
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

//콜백 2가지 경우가 있음

//즉각 적으로 동기적으로 실행하는 Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

//언제 실행될지 모르는 Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === "elie" && password === "dream") || 
      (id === "coder" && password === "academy")) {
        onSuccess(id);
      } else {
        onError(new Error("Not Found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "elie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("No Access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력하시오");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
