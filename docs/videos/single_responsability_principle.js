// BAD
function fetchAndDisplayData() {
  fetch("http://example.com/data")
    .then((response) => response.json())
    .then((data) => {
      let formattedData = "";
      for (let i = 0; i < data.length; i++) {
        formattedData += `Data Point ${i + 1}: ${data[i]}\n`;
      }
      console.log(formattedData);
    })
    .catch((error) => console.error(error));
}

// GOOD3
// Responsible for fetching data
function fetchData() {
  return fetch("http://example.com/data")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

// Responsible for formatting data
function formatData(data) {
  let formattedData = "";
  for (let i = 0; i < data.length; i++) {
    formattedData += `Data Point ${i + 1}: ${data[i]}\n`;
  }
  return formattedData;
}

// Responsible for displaying data
function displayData(formattedData) {
  console.log(formattedData);
}

// We can now combine these functions to achieve our task
fetchData().then((data) => {
  const formattedData = formatData(data);
  displayData(formattedData);
});
