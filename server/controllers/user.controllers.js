const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json({ User : newUser})
    
  } catch (error){
    res.status(500).json({
      msg: "Error al crear usuario",
      error
    })

  }
}
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne( {email}) 
    .then( User => {
      if (User === null) {
        return res.sendStatus(400)
      } else {
        bcrypt.compare(password, User.password)
        .then(isValid => {
            if (isValid) {
                const UserToken = jwt.sign({
                    id: User._id,
                    email: User.email
                    
                }, process.env.SECRET_KEY);

                res
                    .cookie("Usertoken", UserToken, process.env.SECRET_KEY, {
                        httpOnly: true,
                      
                    })
                    .json({ msg: "success!" })
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