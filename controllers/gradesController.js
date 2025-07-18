const {pgQuery} = require('../config/db')

const getAllGrades = async(req, res, next) => {
    try{
        const result = await pgQuery('SELECT * FROM grades LEFT JOIN students ON students.student_id = grades.student_id')
        res.status(200).json({all_grades:result})
    }catch(err){
        return next(err)
    }
}

module.exports = {getAllGrades}