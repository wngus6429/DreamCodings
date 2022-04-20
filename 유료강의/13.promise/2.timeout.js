function execute() {
  console.log('1');
  setTimeout(() => {
    // 콜백함수 전달
    console.log('2');
    // 노드가 3초 타이머 끝나면 태스크큐에 들어올거고, 콜스택이 비어있으면
    // 콜백함수를 스택에 가지고 와서 다시 콜백함수에 있는걸 하나씩 실행하니까 2가 출력
  }, 2000);
  console.log('3');
}
execute();
