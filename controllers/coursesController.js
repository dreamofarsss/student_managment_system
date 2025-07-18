const {pgQuery} = require('../config/db')

const createCourese = async(req, res, nexy) => {
   try{
    const {course_name} = req.body;
    const result = await pgQuery('INSERT INTO courses (course_name) VALUES ($1) RETURNING *', [course_name])
    res.status(201).json({message: 'course created succesfully!', course: result.rows[0]})
   }catch(err){
        return next(err);
   }
}

const getAllCourses = async(req, res, next) => {
    try{
        const result = await pgQuery('SELECT * FROM courses')
        res.status(200).json({all_courses:result})
    }catch(err){
        return next(err)
    }
}

module.exports = {createCourese, getAllCourses}