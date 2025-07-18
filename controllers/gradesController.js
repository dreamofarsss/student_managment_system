const {pgQuery} = require('../config/db')

const addGrades = async(req, res, next) => {
    try{
        const {student_id, grade} = req.body;
        const result = await pgQuery('INSERT INTO grades (student_id, grade) VALUES ($1, $2)', [student_id, grade])
        res.status(201).json({message: 'grade created succesfully!', grade: result.rows[0]})
    }catch(err){
        return next(err)
    }
}
const getAllGrades = async(req, res, next) => {
    try{
        const result = await pgQuery('SELECT * FROM grades LEFT JOIN students ON students.student_id = grades.student_id')
        res.status(200).json({all_grades:result})
    }catch(err){
        return next(err)
    }
}

module.exports = {getAllGrades, addGrades}