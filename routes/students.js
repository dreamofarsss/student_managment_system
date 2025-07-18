const {Router} = require('express');
const router = Router();
const validateStudent = require('../middlewares/validateStudent');
const hashPassword = require('../middlewares/hashPassword');
const { getAllStudents, getStudentById, createStudent, deleteStudent, updateStudent } = require('../controllers/studentsController');

// validateUser middleware broken somewhy;
//router.post('/', validateStudent, hashPassword, createStudent);
router.post('/', hashPassword, createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;