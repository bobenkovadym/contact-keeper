const express = require('express');
const router = express.Router();

// @route GET /api/auth
// @descr Get loged in user
// @access Private

router.get('/', (req, res) => {
  res.send('Get loged in user');
});

// @route POST /api/auth
// @descr Authenticate user & get token
// @access Public

router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
