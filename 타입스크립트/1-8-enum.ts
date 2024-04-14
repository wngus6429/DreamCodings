{
  /**
   ** Enum 상수
   //! 실제 개발할때는 안 쓰는게 좋음 , 타입이 명확해지지 않음
   //! 유니온 타입을 사용하면 된다.
   */
  //! JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //! 상수처럼 만들려면 원래 freeze를 사용했음.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //! TypeScript
  //! enum대신에 유니온 타입이 좋다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  //! 모바일 클라쪽 문제땜에 enum 쓸때도 있다고 함...
  enum Days {
    //! 숫자 혹은 값을 설정 가능
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
  console.log(dayOfweek);
}

//* 2023/06/17 복습
//* 2024/04/14 복습
