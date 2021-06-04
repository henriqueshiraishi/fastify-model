'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const Env = require('../../plugins/Env')
const Jwt = require('../../plugins/jwt')
const Decorate = require('../../plugins/decorate')

test('decorate works standalone', async (t) => {
    const app = Fastify()
    app.register(Env)
    app.register(Jwt)
    app.register(Decorate)

    await app.ready()
    t.equal(app.someSupport(), 'hugs')
})
