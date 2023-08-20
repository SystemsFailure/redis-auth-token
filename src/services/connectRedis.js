const Redis = require('redis');
const {HOST, PORT, PASSWORD} = require('../runtimeVariables/redis.variables');

module.exports.redisClient = Redis.createClient();