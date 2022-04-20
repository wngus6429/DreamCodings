let count = 0;
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}

//! export default는 하나만 보내는거임
