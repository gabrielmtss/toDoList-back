const Task = require('./../models/task');

class TasksService {
  findAll = async () => await Task.find();

  findById = async (id) => {
    const task = await Task.findById(id)
    return task;
  }

  create = async (task) => await Task.create(task);

  edit = async (id, task) => await Task.updateOne({_id: id}, task);

  delete = async (id) => await Task.deleteOne({_id: id});
}

module.exports = TasksService;