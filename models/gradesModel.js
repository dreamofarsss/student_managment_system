const {pgQuery} = require('../config/db')

const createGradesTable = async() => {
    try{
        const result = await pgQuery(`
            CREATE TABLE IF NOT EXISTS grades (
                grade_id SERIAL PRIMARY KEY,
                student_id INT NOT NULL,
                subject VARCHAR(50) NOT NULL,
                grade INT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}