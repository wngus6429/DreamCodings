function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0; i < 5; i++) {
    console.log('i', i);
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
console.log('arr', array);
// let을 사용하면 0,1,2,3,4
// var를 사용하거나 i = 0 하면 5,5,5,5,5
array.forEach((func) => func());
// 이 호출시점에서 console.log(i)가 4줄
// 마지막 i++ 에 i가 5인걸 본다.
