const router = require("express").Router();
authRoutes = require('./views/authRoutes');

router.use('/auth', authRoutes);

module.exports = router;