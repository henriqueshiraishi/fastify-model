'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {
  
    app.register(require('fastify-sensible'), { 
        errorHandler: false
    })

}, {name: 'sensible', dependencies: []})
