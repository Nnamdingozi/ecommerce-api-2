/**
 * PostgreSQL configuration.
 */

'use strict'

require('dotenv').config()

const { Sequelize } = require('sequelize')

let sequelize

if (process.env.NODE_ENV === 'development') {
    sequelize = new Sequelize(process.env.DEV_DATABASE_URL)
} else if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize(process.env.TEST_DATABASE_URL)
} else {
    sequelize = new Sequelize(process.env.DATABASE_URL)
}

try {
    sequelize.authenticate()
        .then(()=>
            console.log('INFO: Connection to database has been established successfully.')
        );
} catch (err) {
    console.log('ERROR: Unable to connect to the database - ', err)
}

const db = {};

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db