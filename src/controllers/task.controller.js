const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware);

router.get('/task', (req, res) => {
  res.send({ msg: 'task', user: req.userId })
});

router.get('/tasks', async (req, res) => {
  return Task.findAll()
    .then((tasks) => res.status(200).send(tasks))
    .catch((error) => res.status(400).send(error));
});

router.get('/tasks/:id', async (req, res) => {
  return Task.findByPk(req.body.id)
    .then((task) => {
      if (!task) {
        return res.status(404).send({
          message: 'Task Not Found',
        });
      }

      return res.status(200).send(task);
    })
    .catch((error) => res.status(400).send(error));
});

router.post('/tasks', async (req, res) => {
  return Task.create({
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.start_date,
  })
    .then((task) => res.status(201).send(task))
    .catch((error) => res.status(400).send(error));
});

router.put('/tasks', async (req, res) => {
  return Task.findByPk(req.body.id)
    .then((task) => {
      if (!task) {
        return res.status(404).send({
          message: 'Task Not Found',
        });
      }

      return task
        .update({
          name: req.body.name || task.name,
          description: req.body.description || task.description,
          start_date: req.body.start_date || task.start_date,
          end_date: req.body.end_date || task.end_date,
          status: req.body.status || task.status,
        })
        .then(() => res.status(200).send(task))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

router.delete('/tasks', async (req, res) => {
  return Task.findByPk(req.body.id)
    .then((task) => {
      if (!task) {
        return res.status(400).send({
          message: 'Task Not Found',
        });
      }

      return task
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = app => app.use('/api', router);
