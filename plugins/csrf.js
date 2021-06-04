'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.register(require('fastify-csrf'), {
        cookieOpts: {
            signed: true
        }
    })

}, {name: 'cors', dependencies: ['cookie']})
