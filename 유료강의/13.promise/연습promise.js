function promise() {
  return new Promise((resolve, reject) => {
    console.log('하나');
    for (let i = 0; i < 10000000000; i++) {
      if (i === 9999999999) {
        return resolve('시발');
      } else {
        return reject('카앜');
      }
    }
  });
}
async function kal() {
  return await promise();
}
kal().then(console.log);
