'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.register(require('fastify-cookie'), {
        secret: app.config.COOKIEKEY,
        parseOptions: {}
    })

}, {name: 'cookie', dependencies: ['env']})
