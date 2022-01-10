const TasksService = require('./../services/tasks.service');

const tasksService = new TasksService;

class TasksController {
  getAll = async (req, res) => {
    const tasks = await tasksService.findAll();
    res.send(tasks);
  }

  getById = async (req, res) => {
    const task = await tasksService.findById(req.params.id);
    res.send(task);
  }

  create = async (req, res) => {
    const task = req.body;

    await tasksService.create(task)
    .then(() => res.send({message: `A tarefa ${task.titulo} foi cadastrada com sucesso!`}))
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor!`})
    });
  }

  edit = async (req, res) => {
    const idParam = req.params.id;
    const taskEdit = req.body;
    await tasksService.edit(idParam, taskEdit)
    .then(() => res.send({message: 'Tarefa editada com sucesso!'}))
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor!`})
    });
  }

  delete = async (req, res) => {
    await tasksService.delete(req.params.id)
    .then (() => res.send({message: 'Tarefa excluida com sucesso!'}))
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor!`})
    });
  }
}

module.exports = TasksController;