const {pgQuery} = require('../config/db')

const createAttendancesTable = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS attendances(
                attendance_id SERIAL PRIMARY KEY,
                status VARCHAR(10) NOT NULL CHECK(status IN ('present', 'absent', 'late')),
                enrollment_id INT NOT NULL,
                FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id) ON DELETE CASCADE
            )    
        `)
    }catch(err){
        console.log(err)
    }
}

module.exports = createAttendancesTable;