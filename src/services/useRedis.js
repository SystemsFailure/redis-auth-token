const Redis = require('redis');

const useRedis = {
    result: undefined,
    async find(value) {
        const client = Redis.createClient();
        await client.connect(); // connect to redis server

        const returnedValue = await client.get(`${value}-id`, (err, result) => {
            if(err) throw err;
        })
        await client.disconnect(); // disconnect from redis server

        return returnedValue ? true : false;
    },
    async insert(key, value) {
        const client = Redis.createClient();
        await client.connect();
        await client.set(key, value, (err, reply) => {
            if (err) {
                console.error(err);
                this.result = 'Ошибка записи данных в Redis';
            }

            this.result =  'Данные успешно записаны в Redis';
        });
        await client.disconnect();

        return this.result
    },
};


module.exports.useRedis = useRedis;