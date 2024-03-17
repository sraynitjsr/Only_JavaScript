async function* asyncGenerator() {
  let i = 0;
  while (i < 5) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i++;
  }
}

(async () => {
  for await (const item of asyncGenerator()) {
    console.log(item);
  }
})();

async function asyncIteration() {
  const items = [0, 1, 2, 3, 4];
  for (const item of items) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(item);
  }
}

asyncIteration();
