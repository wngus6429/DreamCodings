{
  //! 새로운 타입을 내가 정의함
  //! Text를 타입으로 하면 무조건 string 타입이어야 한다.
  //* Type Aliases
  type Text = string; // Text라는 타입은 문자열이라 하는거
  const name: Text = "hello";
  const address: Text = "korea";

  //! Num을 타입으로 하면 무조건 number 타입이어야 한다.
  type Num = number;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    animal: "dog", //에러남
    name: "eel",
    age: 12,
  };

  //! String Literal Types, 이 값이 아니면 안된다.
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  ellieName = "na"; //! name안쓰면 에러남
  type JSON = "json";
  const json: JSON = "json";
  const whatjson: JSON = "whatjson"; //! 값이 json이 아니라서 에러

  type Boal = true; //! Boal을 타입으로 하면 값은 true여야 한다.
  const isCat: Boal = true;
}

//* 2023/06/17 복습
//* 2024/04/14 복습
