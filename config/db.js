const settings = require('./settings')
const {Client, Pool} = require('pg')

const connectToPostgres = async() => {
    const pgAdminClient = new Client({
        user: settings.PG_USER || 'postgres',
        password: settings.PG_PASSWORD || ' ',
        database: 'postgres',
        host: settings.PG_HOST || 'localhost',
        port: settings.PG_PORT || 5432
    })

    try{
        await pgAdminClient.connect()
        console.log(`Succesfully connected to Postgres in admin mode!`)
        // checking if database exists
        const result = await pgAdminClient.query('SELECT 1 FROM pg_database WHERE datname = $1', [settings.PG_DATABASE])
        if(result.rowCount === 0){
            console.log("Creating Database...");
            await pgAdminClient.query(`CREATE DATABASE ${settings.PG_DATABASE}`)
            console.log(`Database ${settings.PG_DATABASE} created!`)
        }else{
            console.log(`Database ${settings.PG_DATABASE} already exists!\nCheck the README.md file for more information.`)
            process.exit(1)
        }
    }catch(err){
        console.log("Failed to connecet to Postgres", err)
    } finally{
        await pgAdminClient.end()
        console.log('admin mode: disconnecting...')
    }
}

// Create connection pool to handle queries
const pgPool = new Pool({
    user: settings.PG_USER || 'postgres',
    password: settings.PG_PASSWORD || ' ',
    database: settings.PG_DATABASE,
    host: settings.PG_HOST || 'localhost',
    port: settings.PG_PORT || 5432
});

// Ensure pool is closed when the process ends
process.on('SIGINT', async () => {
    await pgPool.end();
    process.exit(0);
});

const pgQuery = async (text, data) => {
    try {
        return await pgPool.query(text, data);
    } catch (err) {
        console.error("Can't handle your query", err);
        throw err;
    }
};

module.exports = { connectToPostgres, pgQuery };