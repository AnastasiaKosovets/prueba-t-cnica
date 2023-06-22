const router = require("express").Router();
const authRoutes = require('./views/authRoutes');
const dishRoutes = require('./views/dishRoutes');

router.use('/auth', authRoutes);
router.use('/dishes', dishRoutes);

module.exports = router;