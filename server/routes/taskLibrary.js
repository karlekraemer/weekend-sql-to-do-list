const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    let queryText = 'SELECT * from task_table ORDER BY "id" asc;';
    pool.query(queryText)
    .then((result) => {
        console.log('results from database', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query', error);
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    let queryText = 'SELECT * from task_table ORDER BY "id" asc;';
    pool.query(queryText)
    .then((result) => {
        console.log('results from database', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query', error);
        res.sendStatus(500);
    })
});
