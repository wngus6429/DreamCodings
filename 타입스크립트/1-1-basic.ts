{
  //* Javascript
  //* Primitive: Number, String, Boolean, 
  //* Bigint, Symbol, Null, Undefined
  //* Object: Function, array....
  //! Number
  const num: number = 1;
  //* String
  const str: string = 'hello';
  //* Boolean
  const boal: boolean = false;
  //! undefined 비었는지 안 비었는지 아직 모른다.
  let name: undefined; // 이렇게 단독 본적이 없댄다
  let age: number | undefined; // 이런식으로는 쓴댄다.
  age = undefined;
  age = 10;
  function find(): number | undefined {
    //! 찾으면 숫자를 리턴하고 아니면 undefined
    return undefined;
  }
  //! null 비었다고 결정됨
  let person: null; // 똥, 이렇게 단독 본적이 없댄다
  let person2: string | null; // 대개는 undefined 쓴댄다.
  //! unknown 알수 없는. 똥
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;
  //! any 어느것이든 넣을수 있음. 똥임
  let anything: any = 0;
  anything = 'hello';

  //! void 아무것도 리턴하지 않음. 텅텅빔
  //* 생략 할 수도 있다. 회사마다 다름
  function print(): void {
    console.log('hello');
    return;
  }
  //* void는 undefined밖에 못 적음
  let unusable: void = undefined; // 똥.

  //! never는 리턴할 계획이 없음.
  //* 에러를 던지던지, while문으로 무한 돌리던지
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never;

  // object 똥임
  // 원시타입을 제외한 모든 오브젝트 타입 할당 가능
  // 배열도 가능, 광범위한, 추상적인
  let obj: object; // 똥임
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
