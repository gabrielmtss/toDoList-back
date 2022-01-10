const Task = require('./../models/task');

class tasksService {
  findAll = async () => await Task.find();

  findById = async () => await Task.findById();

  create = async (task) => await Task.create(task);

  edit = async (id, task) => await Task.updateOne({_id: id}, task);

  delete = async (id) => await Task.deleteOne({_id: id});
}

module.exports = tasksService;