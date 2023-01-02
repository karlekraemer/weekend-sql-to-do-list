const express = require('express');
const router = express.Router();

let tasks = [
    {
        tasks: 'example task',
        status: 'work to do'
    }
];

router.get('/', (req, res) => {
    res.send(tasks);
});

router.post('/', (req, res) => {
    tasks.push(req.body);
    res.sendStatus(200);
});

module.export = router;