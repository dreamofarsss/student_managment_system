const {pgQuery} = require('../config/db')

const createCourse = async() => {
    try{
        const result = await pgQuery(`
            CREATE TABLE IF NOT EXISTS courses (
                course_id SERIAL PRIMARY KEY,
                course_name VARCHAR(50) NOT NULL
            );
        `)
        console.log('Courses table created!')
    }catch(err){
        console.log(err)
    }
}
module.exports = createCourse;
