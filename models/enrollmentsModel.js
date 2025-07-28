const {pgQuery} = require('../config/db')

const createTableEnrollments = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS enrollments(
                enrollment_id SERIAL PRIMARY KEY,
                student_id INTEGER NOT NULL,
                course_id INTEGER NOT NULL,
                FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
                FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE
            )    
        `)
    }catch(err){
        console.log(err)
    }
}

module.exports = createTableEnrollments;