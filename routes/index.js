const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//render home page with project data
router.get('/', (req, res) => {
    const data = { projects };
    res.render('index', data);
});



module.exports = router;