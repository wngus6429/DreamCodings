/** @format */

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
            (id === "elie" && password === "dream") || 
            (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("Not Found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "elie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("No Access"));
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력하시오");
const password = prompt("enter your password");
//userStorage.loginUser(id, password).then((user) => userStorage.getRoles);
userStorage
  .loginUser(id, password) //여기서 성공하면 다음줄 .then
  .then(userStorage.getRoles)
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
