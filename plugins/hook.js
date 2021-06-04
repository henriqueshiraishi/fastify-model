'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (app, opts) {

    app.addHook('onRequest', (request, reply, done) => {
        console.log('put your code here - onRequest');
        done();
    });
    
    app.addHook('preHandler', (request, reply, done) => {
        // Check authentication here
        console.log('put your code here - preHandler');
        done();
    });

    app.addHook('onSend', (request, reply, payload, done) => {
        console.log('put your code here - onSend');
        const err = null;
        const newPayload = payload.replace('some-text', 'some-new-text');
        done(err, newPayload);
    });

    app.addHook('onResponse', (request, reply, done) => {
        console.log('put your code here - onResponse');
        done();
    })

}, {name: 'hook', dependencies: ['decorate']})
