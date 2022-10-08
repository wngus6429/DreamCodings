{
  // * JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // * TypeScript, 괄호 뒤의 넘버는 즉 숫자를 리턴 하겠다는거임
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // * JavaScript
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // * TypeScript , Promise의 숫자 타입으로 리턴되는거지
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //! Optional parameter
  //* 파라미터 뒤에 ? 을 붙임으로서 인자 줘도 되고 안줘도 되고
  // function printName(firstName: string, lastName: string | undefined) {
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Job');
  printName('Steve');
  printName('juhyun', undefined);

  // Default parameter
  function printMessage(message: string = 'default 메세지') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 4, 6));
}
