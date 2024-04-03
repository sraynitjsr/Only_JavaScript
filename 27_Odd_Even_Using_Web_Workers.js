const oddWorker = new Worker(URL.createObjectURL(new Blob([`
  self.onmessage = function(event) {
    const number = event.data;
    if (number % 2 !== 0) {
      self.postMessage(number);
    }
  };
`], { type: 'application/javascript' })));

const evenWorker = new Worker(URL.createObjectURL(new Blob([`
  self.onmessage = function(event) {
    const number = event.data;
    if (number % 2 === 0) {
      self.postMessage(number);
    }
  };
`], { type: 'application/javascript' })));

oddWorker.onmessage = function(event) {
  console.log('Odd worker:', event.data);
};

evenWorker.onmessage = function(event) {
  console.log('Even worker:', event.data);
};

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenWorker.postMessage(i);
  } else {
    oddWorker.postMessage(i);
  }
}
