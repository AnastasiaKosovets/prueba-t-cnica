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
            username: req.body.username
        });
        return res.send(newUser);
    } catch (error) {
        return res.send("Algo ha ido mal al registrarse " + error)
    }
}

module.exports = authController;