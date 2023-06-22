const { Dish } = require('../models');
const dishController = {};

dishController.getAllDishes =  async(req, res) => {
    try {
        // This method allow extract all users
        const dishes = await Dish.findAll();

        return res.json({
            success: true,
            message: "Plato encontrado",
            data: dishes
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Este plato no existe",
                error: error.message
            })    
    }
}

userController.getAllPatients =  async(req, res) => {
    try {
        const dishname = req.params.dishname;
        const dish = await Dish.findByPk(dishname)

        if(!dish){
            return res.json({
                success: true,
                message: "Plato no existe"
            })
        }

        return res.json({
            success: true,
            message: "Plato encontrado",
            data: dish
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Error al buscar el plato",
                error: error.message
            })    
    }
}

module.exports = dishController;