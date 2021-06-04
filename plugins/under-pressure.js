'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {
    
    app.register(require('under-pressure'), {
        maxEventLoopDelay: 1000,
        maxHeapUsedBytes: 1000000000,
        maxRssBytes: 1000000000,
        maxEventLoopUtilization: 0.98
    })
    
}, {name: 'under-pressure', dependencies: []})
