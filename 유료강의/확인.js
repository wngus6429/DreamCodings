console.log(globalThis);
console.log(Infinity);

const text = 'Hello world1!'
for (const i of text) {
    console.log(i);
}
const ids = 'user1, user2, user3, user4'
const answer = ids.split(', ')
console.log(answer);

// 1초에 한번씩 시계를 날짜를 포함
setInterval(() => {
    const now = new Date()
    console.log(now.toLocaleString('ko-Kr'));
}, 1000);