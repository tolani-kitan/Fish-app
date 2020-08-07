const { Pool } = require('pg');
require('dotenv').config();

// const devConfig = {

//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE_NAME,
//     password: process.env.PASSWORD,
//     port: process.env.PG_PORT
// }

const devConfig = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PG_PORT}/${process.env.DATABASE_NAME}`

const proConfig = {
    connectionString: process.env.DATABASE_URL //heroku addons
}

const pool = new Pool({
    connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig
}
);

pool.connect();

module.exports = pool;