{
  //! Array, 배열 정의 하는법 2가지
  const fruits: string[] = ["🍕", "🍖"];
  const scores: Array<number> = [1, 3, 4];
  const scoress: number[] = [1, 3, 4];

  //! readonly 데이터를 읽을수만 있음. 변경 불가능
  function printArray(fruits: readonly string[]) {}

  //* Tuple 배열인데, 서로 다른 타입 사용가능
  //* 튜플 권장 안함, 인덱스로 알기가 불편
  //! 그래서 interface, type alias, class로 대체해서 사용 하는게 좋다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  //! 리액트 useState에서랑 비슷한 모양이지??
  //* 꼭 필요한게 아니면 웬만하면 안 쓰는게
  const [name, age] = student;
}

//* 2023/06/12 복습
//* 2024/04/14 복습
