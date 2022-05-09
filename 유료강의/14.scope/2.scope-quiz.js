{
  const x = 1;
  {
    const y = 2;
    console.log('x1', x); //* 1이 출력됨
    //! 블럭 내부에서 밖에는 참조 가능함
  }
  console.log('x2', x); //* 1 나옴
  //! console.log(y); //블럭 밖에서 내부는 참조 불가
}

//! 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
const text = 'global';
{
  //! 지역 변수(로컬변수), 지역 스코프(로컬스코프)
  const ext = 'inside block1';
  {
    console.log('마이', text); // inside block2
    const text1 = 'inside block2';
    //!외부 한칸씩 사면서 가까운 text를 찾음
    console.log(ext); // inside block1
  }
  console.log('쉿', text); //* global
}
