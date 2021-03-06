const express = require('express');
const getSkills = require('./controllers/getSkills');
const router = express.Router();

/* GET skills listing. */
router.get('/:username', getSkills);

module.exports = router;
