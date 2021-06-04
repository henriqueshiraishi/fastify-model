'use strict'

const fp = require('fastify-plugin')
const mongoose = require('mongoose')

module.exports = fp(async function (app, opts) {
    
    let options = {
        retryWrites: true, 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority',
        }
    }
    try {
        mongoose.connect(`mongodb+srv://${app.config.DBUSER}:${app.config.DBPASS}@${app.config.DBHOST}/${app.config.DBNAME}`, options)
    } catch (e) {
        console.error(e)
    }

}, {name: 'mongoose', dependencies: ['env']})
