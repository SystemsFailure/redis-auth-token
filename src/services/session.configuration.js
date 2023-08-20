const session = require("express-session");
// const redisStore = require('connect-redis');
const { redisClient } = require('../services/connectRedis');
const { secret } = require('../runtimeVariables/secret.key');

// redisStore = redisStore(session);

module.exports.session = session({
    secret: secret,
    store: new redisStore({client: redisClient}),
    resave: false,
    saveUninitialized: true,
})