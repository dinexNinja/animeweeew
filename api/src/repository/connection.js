import mysql from 'mysql/promise'

const con = await CreateConnection({
    host: process.env.mysql_HOST,
    user: process.env.mysql_USER,
    password: process.env.mysql_PWD,
    database: process.env.mysql_DB
})