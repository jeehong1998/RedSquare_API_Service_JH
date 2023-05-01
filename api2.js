const axios = require('axios');
const express = require('express');

const app = express();

app.get('/check-hash', async (req, res) => {
  let hash;
  while (true) {
    const response = await axios.get('http://localhost:3000/generate-hash');
    hash = response.data.hash;

    console.log(hash);

    if (hash.match(/\d$/) && parseInt(hash.charAt(hash.length - 1)) % 2 === 1) {
      break;
    }
  }
  res.send({ hash });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});