const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Leandro Paz')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
  res.json({message: 'Buenas!'});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});