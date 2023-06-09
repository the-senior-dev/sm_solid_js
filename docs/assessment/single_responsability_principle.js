async function processData() {
  // Fetch data from an API
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  // Process the data
  const processedData = data.map((item) => {
    // Some processing logic here
    return {
      ...item,
      processed: true,
    };
  });

  // Write the result to a database
  const db = getDatabaseConnection();
  await db.collection("processedData").insertMany(processedData);
}

// Usage
processData().catch(console.error);
