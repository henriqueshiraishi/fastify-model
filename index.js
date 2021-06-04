'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (app, opts) {

    app.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    app.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}
