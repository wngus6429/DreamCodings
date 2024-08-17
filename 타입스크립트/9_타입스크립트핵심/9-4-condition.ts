// 기존에 주어진 타입이 string이면 boolean 이고 아니면 number타입으로
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // 결과는 boolean

// 전달된 타입이 string을 상속한다면 string을 쓰고
// 아니라면 숫자를 상속한다면 숫자, 계속 간다.
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";
// TypeName에 string 전달하면, string 문자 타입
type T0 = TypeName<string>;
("string");
type T1 = TypeName<"a">;
("string");
type T2 = TypeName<() => void>;
("function");
