'use strict'

const fp = require('fastify-plugin')
const cron = require('node-cron')

module.exports = fp(async function (app, opts) {

    app.decorate('myCronTask', cron.schedule('* * * * * *', () => {
        console.log('running a task every each second')
    }, { scheduled: false }))

}, {name: 'cron', dependencies: []})
