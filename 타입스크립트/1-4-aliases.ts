{
  //! 새로운 타입을 내가 정의함
  //* Type Aliases
  type Text = string; // Text라는 타입은 문자열이라 하는거
  const name: Text = 'hello';
  const address: Text = 'korea';

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    animal: 'dog', //에러남
    name: 'eel',
    age: 12,
  };

  //! String Literal Types
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  ellieName = 'na'; //! name안쓰면 에러남
  type JSON = 'json';
  const json: JSON = 'json';
  const whatjson: JSON = 'whatjson';

  type Boal = true;
  const isCat: Boal = true;
}

// 20230617 복습