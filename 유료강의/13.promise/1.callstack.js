function a() {
  for (let i = 0; i < 10000000000; i++);
  console.log('부윀');
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
