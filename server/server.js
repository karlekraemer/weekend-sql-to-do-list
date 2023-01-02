const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// Setup body parser - to translating request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));
@@ -12,15 +11,15 @@ app.use(bodyParser.json()); //what's up here
// from the server/public folder
app.use(express.static('server/public'));

// Start express
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});

let taskRouter = require('./routes/task.router');
let taskLibraryRouter = require('./routes/taskLibrary');

app.use('/tasks', taskRouter);
app.use('/taskLibrary', taskLibraryRouter);
// need to set up an app.use for the task router and for the task library [x]

// need to set up an app.use for the task router and for the task library [x]
// Start express
const PORT = 5001;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});