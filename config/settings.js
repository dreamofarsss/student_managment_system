require('dotenv').config()

const settings = {
    PORT: process.env.PORT || 3001,
    PG_USER: process.env.PG_USER,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_DATABASE: process.env.PG_DATABASE,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: process.env.PG_PORT
}

module.exports = settings