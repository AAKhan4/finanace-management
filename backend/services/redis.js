const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient({
    host: 'localhost',
    port: process.env.REDIS_PORT,
});

redisClient.on('error', (err) => {
    console.log('Error ' + err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

module.exports = redisClient;