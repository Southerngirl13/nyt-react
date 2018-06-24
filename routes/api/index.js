const router = require('express').Router();
const articlesRoutes = require('./article');
const savedRoutes = require('./saved');

// articles routes
router.use('/saved', savedRoutes);
router.use('/article', articlesRoutes);

module.exports = router;
