const { authenticate } = require('../config/jwt.config');
const { register, login, logout } = require('../controllers/user.controllers')


module.exports = app => {
  app.post('/api/user/register',register); 
  app.post('/api/user/login', login);
  app.post('/api/user/logout', logout);
 
}
//