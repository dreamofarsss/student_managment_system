const {pgQuery} = require('../config/db')

const createGradesTable = async() => {
    try{
        const result = await pgQuery(`
            CREATE TABLE IF NOT EXISTS grades (
                grade_id SERIAL PRIMARY KEY,
                student_id INT NOT NULL,
                FOREIGN KEY(student_id) REFERENCES students(student_id),
                grade INT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log('Greades table created!')
    }catch(err){
        console.log(err)
    }
}

module.exports = createGradesTable;