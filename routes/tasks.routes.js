const express = require("express");
const TasksController = require('./../controllers/tasks.controller');

const tasksController = new TasksController();

const router = express.Router();

router.get("/", tasksController.getAll);

router.get("/:id", tasksController.getById);

router.post("/add", tasksController.create);

router.put("/edit/:id", tasksController.edit);

router.delete("/delete/:id", tasksController.delete);

module.exports = router;