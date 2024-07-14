import pg from 'pg';

import {config} from 'dotenv'

config();
const {Pool} = pg;

const DB_URI = process.env.DATABASE_URL
export const poolDb = new Pool({
    connectionString:DB_URI,
    ssl:{
        rejectUnauthorized:false
    }
})

