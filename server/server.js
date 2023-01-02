const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setup body parser - to translating request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Seve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

let taskRouter = require('./routes/task.router');
let taskLibraryRouter = require('./routes/taskLibrary');

app.use('/tasks', taskRouter);
app.use('/taskLibrary', taskLibraryRouter);

// Start express
const PORT = 5001;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});