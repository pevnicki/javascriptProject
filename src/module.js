console.log('module working');

async function start() {
  return Promise.resolve('async working');
}
start().then(console.log);
