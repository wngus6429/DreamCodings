{
  /**
   *! Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  //! 두가지 전부 이용가능 굿 ㅋ
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}

//* 2023/06/17 복습
//* 2024/04/14 복습
