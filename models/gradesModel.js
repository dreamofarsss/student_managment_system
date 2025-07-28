const {pgQuery} = require('../config/db')

const createGradesTable = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS grades(
                grade_id SERIAL PRIMARY KEY,
                grade DECIMAL(5,2) NOT NULL CHECK(grade >= 0 AND grade <= 100),
                enrollment_id INT NOT NULL,
                FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id) ON DELETE CASCADE
            );
        `)
    }catch(err){
        console.log(err)
    }
}
module.exports = createGradesTable;
