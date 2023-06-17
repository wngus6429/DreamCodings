{
  /**
   *! Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  //! as string으로 문자열이라고 장담한거
  //! 근데 위에 실제로는 2를 보내고 있잖슴?? 그래서 as 문법 똥임
  //* 단 undefined가 나온다. 진짜 장담할때만 써야함
  console.log((result as string).length); // undefined 가 나옴
  console.log((<string>result).length); // undefined 가 나옴

  const wrong: any = 5;
  //! 숫자를 가진 배열이라고 장담을함 에러 나옴.
  console.log((wrong as Array<number>).push(1)); // 😱

  //숫자를 찾으면 넘버 Arrayf를 리턴 못 찾으면 언디파인
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱
  numbers!.push(2);
  // !를 붙이면 여긴 무조건 null이 아니다
  // querySelector는 요소가 있을수도 null 일수도 있다.
  // 장담할떄 !붙임
  const button = document.querySelector('class')!;
  if(button){
    button.nodeValue;
  }
}

// 20230617 복습