'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.register(require('fastify-helmet'), {
        contentSecurityPolicy: false
    })

}, {name: 'helmet', dependencies: []})
