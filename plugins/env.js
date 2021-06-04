'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    const schema = {
        type: 'object',
        required: [ 'JWTKEY', 'COOKIEKEY', 'DBUSER', 'DBPASS', 'DBHOST', 'DBNAME' ],
        properties: {
            JWTKEY: {
                type: 'string',
                default: ''
            },
            COOKIEKEY: {
                type: 'string',
                default: ''
            },
            DBUSER: {
                type: 'string',
                default: ''
            },
            DBPASS: {
                type: 'string',
                default: ''
            },
            DBHOST: {
                type: 'string',
                default: ''
            },
            DBNAME: {
                type: 'string',
                default: ''
            }
        }
    }

    app.register(require('fastify-env'), {
        confKey: 'config',
        schema: schema,
        data: process.env
    })

}, {name: 'env', dependencies: []})
