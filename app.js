require('dotenv').config();
const express = require('express');
const { connectToPostgres, pgQuery } = require('./config/db');
const app = express();

startServer();

app.use(express.json())
app.use('/students', require('./routes/students'));
app.use('/courses', require('./routes/courses'));
app.use(require('./middlewares/errorHandler'));

async function startServer(params){
    try {
        await connectToPostgres();
        const result = await pgQuery('SELECT NOW()');
        console.log(`Successfully connected to Postgres ${process.env.PG_DATABASE} database!\nCurrent time: ${result.rows[0].now}`);
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server started on port ${process.env.PORT || 3000}`);
        });

        //create tables in the database
        await require('./models/coursesModel')();
        await require('./models/studentsModel')();
        await require('./models/enrollmentsModel')();
        await require('./models/gradesModel')();
        await require('./models/attendanceModel')();
    } catch (err) {
        console.error(`Failed to connect to server: ${err.message}`);
        process.exit(1);
    }

    
};
