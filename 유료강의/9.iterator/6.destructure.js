//! 구조 분해 할당 Desturcturing Assignment
//! 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x); // 2
console.log(y); // 1
console.log(z); // 0

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name); // Ellie
  console.log('나이', age); // 20
  console.log('직업', job); // s/w engineer
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log('네임', name); // Ellie
console.log(age); // 20
console.log(occupation); // s/w engineer
console.log(pet); // 강아지

//! Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color); // black
}
changeColor(prop);
