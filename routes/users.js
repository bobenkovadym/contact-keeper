const express = require('express');
const router = express.Router();

// @route POST /api/users
// @descr Register a user
// @access Pubic

router.post('/', (req, res) => {
  res.send('Register');
});

module.exports = router;
