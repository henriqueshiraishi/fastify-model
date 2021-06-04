'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.register(require('fastify-cors'), {
        origin: false
    })

}, {name: 'cors', dependencies: []})
