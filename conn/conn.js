const mongoose = require('mongoose');

const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/tasks', {
    useNewUrlParser: true
  })
  .then(() => console.log('Conexão com MongoDB executada com sucesso!'))
  .catch((err) => console.error(`Erro na conexão com o banco: ${err}`));
}

module.exports = Conn;