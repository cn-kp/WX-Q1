const router = require('express').Router();
const userRoutes = require('./user')

router.use('/answers/user', userRoutes)

module.exports = router;