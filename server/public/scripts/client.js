function onReady() {
    console.log('dom ready');
    // need to call the getTasks function here to start with any existing tasks
    getTasks();
    // handle the submit button click
    $('#submit').on('click', postTask);
    // need to make a click event to call a function to handle delete click events
    $('#incompleteTableBody').on('click', '.delete', handleDelete);
@@ -21,7 +23,7 @@ function postTask() {
    let taskObject = {
        task: $('.new-task').val(),
        status: 'work to do'
    }
    };
    $.ajax({
        type: 'POST',
        url: '/taskLibrary',
@@ -74,7 +76,7 @@ function handleDelete() {
        getTasks();
    }).catch(function(error) {
        console.log('error with deleting, ', error);
    })
    });
}  // end handleDelete function