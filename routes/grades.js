const {Router} = require('express');
const router = Router();
const {getAllGrades, addGrades} = require('../controllers/gradesController')

router.get('/', getAllGrades);
router.post('/', addGrades);

module.exports = router;