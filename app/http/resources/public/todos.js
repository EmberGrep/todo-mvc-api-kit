// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.todos = function(req) {
  return req.store.recordCollection('Todo');
};

// GET
api.todo = function(req) {
  return req.store.recordItemById('Todo', req.params.id);
};

// POST
api.addTodo = function(req) {
  return req.store.createRecord('Todo');
};

// PUT
api.editTodo = function(req) {
  return req.store.updateRecord('Todo', req.params.id);
};

// DELETE
api.deleteTodo = function(req) {
  return req.store.destroyRecord('Todo', req.params.id);
};

router.get('/todos', api.todos);
router.post('/todos', api.addTodo);

router.route('/todos/:id')
  .get(api.todo)
  .put(api.editTodo)
  .delete(api.deleteTodo);

module.exports = router;
