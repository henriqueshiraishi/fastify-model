'use strict'

module.exports = async function (app, opts) {
    app.get('/', async (request, reply) => { return { root: true } })
}
