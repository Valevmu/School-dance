const { authenticate } = require('../config/jwt.config');
const danceController = require('../controllers/dance.controllers');

module.exports = (app) => {
  app.get('/api/students/', danceController.findAllStudents)
  app.get('/api/students/:id',authenticate, danceController.findOneStudent)
  app.put('/api/students/update/:id',authenticate, danceController.updateStudent)
  app.post('/api/students/new',authenticate,  danceController.createNewStudent)
  app.delete('/api/students/delete/:id',authenticate, danceController.deleteAnExistingStudent)
  // app.patch('/api/students/:id/like', authenticate,danceController.updateStudent )

}
