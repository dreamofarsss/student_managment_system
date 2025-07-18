const {pgQuery} = require('../config/db')

const createCourese = async() => {
    try{
        const result = await pgQuery(`
            CREATE TABLE IF NOT EXISTS courses (
                course_id SERIAL PRIMARY KEY,
                course_name VARCHAR(50) NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log('Courses table created!')
    }catch(err){
        console.log(err)
    }
}

module.exports = createCourese;