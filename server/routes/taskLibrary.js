const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    let queryText = 'SELECT * from tasks ORDER BY "id" asc;';
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

router.get('/:id', (req, res) => {
    console.log('in get request', req.params.id);
    const queryText = `SELECT * from tasks WHERE id = ${req.params.id};`;
    pool.query(queryText)
    .then((result) => {
        console.log('results from DB', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making query', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const newTask = req.body;
    const queryText = `
        INSERT INTO "tasks" ("task", "status")
        VALUES ($1, $2);
    `;
    pool.query(queryText, [newTask.task, newTask.status])
    .then((result) => {
        console.log('result', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error making insert query', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
    console.log('delete request says hi', req.params.id);
    const queryText = `DELETE from tasks WHERE id = ${req.params.id};`;
    pool.query(queryText)
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error making a query', error);
        res.sendStatus(500);
    })
});

module.exports = router;