const {Router} = require('express');
const router = Router();
const {createCourese, getAllCourses} = require('../controllers/coursesController')

router.get('/', getAllCourses);
router.post('/', createCourese);

module.exports = router;