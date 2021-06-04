'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {
    
    app.register(require('fastify-rate-limit'), {
        max: 100,
        timeWindow: '1 minute'
    })
    
}, {name: 'rate-limit', dependencies: []})
