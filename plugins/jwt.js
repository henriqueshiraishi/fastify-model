'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.register(require('fastify-jwt'), {
        secret: app.config.JWTKEY
    })

}, {name: 'jwt', dependencies: ['env']})
