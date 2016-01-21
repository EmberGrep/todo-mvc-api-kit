var Mystique = require('mystique');

var TodoTransformer = Mystique.Transformer.extend({
  resourceName: 'todo',
  mapOut: function(todo) {
    return {
      id: todo.id,
      isComplete: todo.isComplete,
      title: todo.title,
    };
  },

  mapIn(req) {
    return {
      isComplete: req.getJson('todo.isComplete'),
      title: req.getJson('todo.title'),
    };
  },
});

Mystique.registerTransformer('Todo', TodoTransformer);
