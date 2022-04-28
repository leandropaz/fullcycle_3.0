const express = require('express');
const mysql = require('mysql2');
const random_name = require('node-random-name');

const app = express();
const PORT = 8080;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafiodb',
};

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);
  const name = random_name();

  const insert = `INSERT INTO people(name) values('${name}')`;
  const fetch = `SELECT * FROM people`;
  connection.query(insert);

  connection.execute(fetch, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Ocorreu um erro. Por favor, verifique os logs da aplicação.');
    }
    let list = `<ul>`;
    for (const item of results) {
      list += `<li>${item.name}</li>`;
    }
    list += `</ul>`;
    res.set('Content-Type', 'text/html');
    res.send(`<h1>Full Cycle Rocks!</h1> ${list}`);
  });
  connection.end();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
