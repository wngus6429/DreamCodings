{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name 타입은 string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";
  const key2: Keys = "name";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
