const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>DevOps with Docker Exercise 3.2</h1>
    <p>Successfully deployed from GitHub!</p>
    <p>Repository: <a href="https://github.com/Bra90/my-containerized-app">Bra90/my-containerized-app</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
