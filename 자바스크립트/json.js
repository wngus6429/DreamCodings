/** @format */

//1. Object to Json
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log("first", `key:${key}, value:${value}`);
  return key === "name" ? "park" : value;
});
console.log(json);

//2. Json to Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
  console.log(`"PARSE",key:${key}, value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
