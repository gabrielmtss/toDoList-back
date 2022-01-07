const mongoose = require('mongoose');

const Conn = () => {
  mongoose.connect('mongodb+srv://dbUser:XeNQFv3nge3Sso0D@todolist.jvyvs.mongodb.net/toDoList?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Conexão com MongoDB executada com sucesso!'))
  .catch((err) => console.error(`Erro na conexão com o banco: ${err}`));
}

module.exports = Conn;