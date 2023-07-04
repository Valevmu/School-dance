const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  
  try {
    const newUser = await User.create(req.body);
    res.json({ User : newUser})
    
  } catch (error){
    res.json({
      msg: "Error al crear usuario",
      error
    })
  }
  }

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne( {email}) 
    .then( profile => {
      if (profile === null) {
        return res.sendStatus(400)
      } else {
        bcrypt.compare(password, profile.password)
        .then(isValid => {
            if (isValid) {
<<<<<<< HEAD
                const userToken = jwt.sign({
                    id: profile._id,
                    email: profile.email
                    
=======
                const UserToken = jwt.sign({
                    id: User._id,
                    email: User.email,
>>>>>>> e12fc38b2eb5d07f5c5601d29f941eb2800914ff
                }, process.env.SECRET_KEY);

                res
                    .cookie("userToken", userToken, process.env.SECRET_KEY, {
                        httpOnly: true,
                      
                    })
<<<<<<< HEAD
                    .json({ msg: "success!", profile })
=======
                    .json({ msg: "success!", id: User._id, email: User.email, type: User.userType })
>>>>>>> e12fc38b2eb5d07f5c5601d29f941eb2800914ff
            } else {
                res.status(403).json({ msg: "Contraseña incorrecta" })
            }
        })
      }
    }).catch(err => res.json({
      msg: "Error al iniciar sesión",
      err
  }));
  
}

module.exports.logout = async (req, res) => {
  try {
      await User.findOne({ email: req.body.email });
      res.clearCookie('Usertoken')
      .json({ msg: 'Chau vuelve pronto' });

  } catch (error) {
      res.status(403).json({
          msg: "Error al cerrar sesión",
          error
      })
  }
}