
const Pool = pg.Pool;

const pool = new Pool({
    database:'weekend-to-do-app',
    database:'weekend_to_do_app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('postgres connected');
    console.log('postgres is connected');
});

pool.on('error', (error) => {
    console.log('error with postres pool, ', error);
    console.log('error with postgres pool, ', error);
});

module.exports = pool;