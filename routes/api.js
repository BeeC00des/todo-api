const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {
  // get placeholder
  Todo.find({}, 'action')
  .then((data) => res.json(data))
  .catch(next);
});



router.post('/todos', (req, res) => {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch((error)=> console.log(error));


  // post placeholder

  //     if (req.body.action) {
  // } else {
  //   res.json({
  //     error: 'The input field is empty',
  //   });
  // }
});

router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.put('/todos/:id', (req, res, next) => {
    // delete placeholder
    Todo.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
  });

  router.patch('/todos/:id', (req, res, next) => {
    // delete placeholder
    Todo.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
  });

  console.log('adde ola base')


module.exports = router;