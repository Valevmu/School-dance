const classController = require('../controllers/class.controllers');

module.exports = (app) => {
  app.get('/api/classes/', classController.findAllClass);
  app.get('/api/classes/:id', classController.findOneClass);
  app.put('/api/classes/update/:id', classController.updateClass);
  app.post('/api/classes/new', classController.createNewClass);
  app.delete('/api/classes/delete/:id', classController.deleteAnExistingClass);
}
