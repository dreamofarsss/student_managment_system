# The key points of this project
## `a little addition after the exam`

### Getting start: creating .env File

you need to create a .env file in the root directory with the following variables
- **PORT=3001** - server port 
- **PG_DATABASE='examdatabase'** - database name.
- **PG_HOST=** - (optional). Your Postgres cluster host. *default: localhost*
- **PG_PORT=** - (optional). specify Postgres cluster port
- **PG_USER=** - (optional). Postgres username with password. *default: postgres default user*
- **PG_PASSWORD=** (optional). Your user's password. *default: postgres user default password - ' '*

## database connection:  
in the `config/db.js` file I connect to your postgres cluster's *postgres* database.
then I create *PG_DATABASE* database to use it for my project.
if database with that name exists, you will get an log with message

(_Database `datname` already exists!_)

and you must drop that database before starting this API.

You can provide custom Postgres credentials (*PG_USER* and *PG_PASSWORD*) to connect using your user account.
>*Note:* The default Postgres user password may vary by platform. This project assumes the default password is an empty string (`' '`). 

You can also specify remote postgres server and port (*PG_HOST* and *PG_PORT*)

After everything I create a connection pool to *PG_DATABASE* and export it.

---
## About avialable API routes
### In (docs/) directory you can find the postman collection where 7 routes are registered
### But in fact there are more possible routes.

Whole routes:

### (/students)
- **POST:** localhost:3001/students

req.body example: 
```json
{
	"first_name":"Arsen",
    "last_name":"Begijanyan",
    "email":"dreamofars@gmail.com",
    "password":"12345678"
}
```
- **PUT:**  localhost:3001/students/[id]

req.body examle: 
```json
{
	"first_name":"NOTarsen",
    "last_name":"Begijanyan",
    "email":"NOTdreamofars@gmail.com",
    "password":"12345678"
}
```
- **DEL:** localhost:3001/students/[id]
- **GET:** localhost:3001/students
- **GET:** localhost:3001/students/[id]

### (/courses)

- **POST:** localhost:3001/courses

req.body example:
```json
{
	"course_name":"programming"
}
```
- **GET:** localhost:3001/courses

### (/grades)
> **OPEN THE `app.js` AND DE-COMMENT 11 LINE!!! (`//app.use('/grades', require('./routes/grades'));`)**

- **POST:** localhost:3001/grades

req.body example: 
```json
{
	"student_id":"1",
    "grade":"10"
}
```
- **GET** localhost:3001/grades
