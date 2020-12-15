const express = require('express');
const router = express.Router();

//render home page with project data
router.get('/', (req, res) => {
    res.render('about');
});



module.exports = router;