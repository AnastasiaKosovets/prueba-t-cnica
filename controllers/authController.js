const { User } = require('../models');
const jwt = require('jsonwebtoken');
const authController = {};

authController.register = async (req, res) => {
    try {
        // if (req.body.password.length < 8){
        //     return res.json ({
        //         success: true,
        //         message: "La contraseña tiene que tener 8 carácteres"
        //     });
        // };
        // const newPassword = (req.body.password, 8);
        const newUser = await User.create ({
            email: req.body.email,
            username: req.body.username,
            role_id: req.body.role_id

        });
        return res.send(newUser);
    } catch (error) {
        return res.send("Algo ha ido mal al registrarse " + error)
    }

}

authController.login = async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if(!user) {
        return res.json({
          success: true,
          message: "Email incorrecto"
        });
      }
      return res.json({
        success: true,
        message: "Bienvenid@",
        user
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Algo ha ido mal con LogIn",
        error: error
      })
    }
  }

module.exports = authController;