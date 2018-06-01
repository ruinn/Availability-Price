const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const seeder = require('../database/seeder.js');
const faker = require('faker');

const randomName = faker.name.findName();
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}../client`));

const port = 3003;
app.listen(port, () => {
  console.log(`listening in on ${port}`);
});

app.get('/seedDb', (req, res) => {
  console.log('hit');
  seeder.randomRoom();
  res.send('success');
});
