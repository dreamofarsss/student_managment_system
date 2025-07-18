const {pgQuery} = require('../config/db')

const getAllStudents = async(req, res, next) => {
    try{
        const result = await pgQuery('SELECT * FROM students')
        res.status(200).json({all_students:result})
    }catch(err){
        return next(err)
    }
}

const getStudentById = async(req, res, next) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Id is required!"})
        }

        const result = await pgQuery('SELECT * FROM students WHERE student_id = $1', [id])
        if(result.rowCount === 0){
            return res.status(404).json({message:'student with that id not found'})
        }
        res.status(200).json({student:result.rows[0]})
    }catch(err){
        return next(err)
    }
}

const createStudent = async(req, res, next) => {
    try{
        const {first_name, last_name, email, password} = req.body;
        const result = await pgQuery('INSERT INTO students (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, email, password])
        res.status(201).json({message: 'student created succesfully!', student: result.rows[0]})
    }catch(err){
        return next(err)
    }
}

const deleteStudent = async(req, res, next) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Id is required!"})
        }
        const result = await pgQuery('DELETE FROM students WHERE student_id = $1 RETURNING *', [id])
        res.status(200).json({message:'student deleted successfully'})
    }catch(err){
        return next(err)
    }
}

const updateStudent = async(req, res, next) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Id is required!"})
        }
        const {first_name, last_name, email, password} = req.body;
        const result = await pgQuery('UPDATE students SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE student_id = $5', [first_name, last_name, email, password, id])
        res.status(200).json({message:'student updated successfully'})
    }catch(err){
        return next(err)
    }
}

module.exports = { getAllStudents, getStudentById, createStudent, deleteStudent, updateStudent }