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

  // Animal의 키만 가능하다
  type Keys = keyof Animal; // name, age, gender 사용가능
  const key: Keys = "gender";
  const key2: Keys = "name";

  type Person = {
    name: string;
    gender: Animal["gender"]; // male과 female만 가능해지겟지
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
