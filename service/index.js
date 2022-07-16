require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const select = ({ username, password }) => {
    connection.connect();
    console.log('mysql connection OK!');
    console.log(username, password);
};

module.exports = select;