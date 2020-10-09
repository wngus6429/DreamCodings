//Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(); // join은 string으로 바꿈
  //배열에 있는 모든 애들을 더해서 string으로 바꿈, 구분자를 넣어서
  console.log(result);
}

{
  //Q2. Make an array out of a string , string을 배열로 만들기
  const fruits = "🍕, 🍟,🌭";
  const result = fruits.split(",");
  console.log(result);
}

{
  //Q3. make this array look like this: [5,4,3,2,1]
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

{
  //Q4. make new array without the first two elements
  const array = [1, 2, 3, 4, 5];
  //배열 자체에서 데이터를 삭제
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);
}

{
  //Q4. make new array without the first two elements
  const array = [1, 2, 3, 4, 5];
  //slice는 배열은 특정한 부분을 리턴함
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}
