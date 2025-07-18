const {pgQuery} = require('../config/db')

const createStudentsTable = async() => {
    try{
        const result = await pgQuery(`
            CREATE TABLE IF NOT EXISTS students (
                student_id SERIAL PRIMARY KEY,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50),
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log('Students table created!')
    }catch(err){
        console.log(err)
    }
}

module.exports = createStudentsTable;