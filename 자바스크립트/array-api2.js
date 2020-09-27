/** @format */

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//Q5. find a student with the score 90
// {
//   const result = students.find(function (people, index) {
//     console.log(people, index);
//     return people.score === 90;
//   });
//   console.log("결과", result);
// }

// {
//   const result = students.find((people) => people.score === 90);
//   console.log("결과", result);
// }

//Q6. make an array of enrolled students
//true인 사람 찾아서 배열로 만들어라 filter
{
  const result = students.filter((people2) => people2.enrolled === true);
  //console.log(result);
}

//Q7. make an array containing only the students scores
// Result should be : [45, 80, 90, 66, 88]
//배열안에 들어있는 요소 한가지 한가지를 다른것으로 변환시켜줌
{
  const result = students.map((people3) => people3.score);
  //console.log(result);
  //맵은 배열안에 들어있는 모든 요소들을 우리가 전달해준 콜백함수를
  //호출하면서 콜백함수에서 가공된 리턴된 값들로 대체
}

//Q8. check if there is a student with the score lower than 50
//배열의 요소 중에서 콜백함수가 리턴이 true가 되는 애가 있는지 없는지 확인
{
  const result = students.some((student) => student.score < 50);
  //console.log(result);
  //every는 모든 요소들이 이 조건을 충족해야 true가 리턴됨
  const result2 = students.every((student) => student.score < 50);
  //console.log(result2);
}

//Q9. compute students average score
//배열에 있는 모든 요소들의 값을 누적하는, 모아놓을때 사용함.
//curr 배열 하나하나씩 전달되는데 prev 리턴한 값이 그 다음에 호출될때 prev로 연결되어진다
//
{
  //즉 reduce우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 사용.
  //reduceRight은 배열 뒤에서 시작함
  //   const result = students.reduce((prev, curr) => {
  //     console.log("ㅡㅡㅡㅡㅡㅡㅡ");
  //     console.log(prev);
  //     console.log(curr);
  //     return prev + curr.score;
  //   }, 0);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  //console.log("결과", result / students.length);
  //prev 이전에 콜백함수에서 리턴된 값이 전달되어 오고
  //curr 배열의 아이템을 순차적으로 전달 받는다.
}

//Q10 make a string containing all the scores
// result should be: 40 80 90 66 88
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  //console.log(result);
}

//Q11 sored in ascending order
// result should be 45, 66, 80, 88, 90
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  // 반대로
  console.log(result);
}
