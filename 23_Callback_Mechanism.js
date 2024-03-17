function fetchData(callback) {
  setTimeout(function() {
    const data = "This is the fetched data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);

console.log("Fetching data...");
