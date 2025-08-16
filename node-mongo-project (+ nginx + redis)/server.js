// الكود ده هيتغير شوية
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const PORT = 3000;

// ... (جزء الاتصال بـ MongoDB زي ما هو متغيرش)

// --- الجزء الجديد بتاع Redis ---
const redisClient = redis.createClient({
    // 'cache' is the name we will give our Redis service
    url: 'redis://cache:6379' 
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
(async () => {
    await redisClient.connect();
    console.log('SUCCESS: Redis Connected!');
})();
// --- نهاية الجزء الجديد ---

app.get('/', (req, res) => {
    res.send('Hello World! This is my Node.js app, with Nginx, MongoDB, and Redis!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});