const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');

const app = express();

app.use(express.json());
app.use(cors());

Conn();

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta ${port}`);
});