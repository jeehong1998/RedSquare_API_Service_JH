const express = require('express');
const crypto = require('crypto');
const app = express();

app.get('/generate-hash', (req, res) => {
  setTimeout(() => {
    const timestamp = new Date().getTime().toString();
    const randomString = crypto.randomBytes(20).toString('hex');
    const hash = crypto.createHash('sha256').update(timestamp + randomString).digest('hex');
    res.send({ hash });
  }, 1000);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});