$(document).ready(onReady);

//making the onReady function

function onReady() {
    console.log('we ready');
    getTasks();
    $('#submit').on('click', postTask);
    $('#incompleteTableBody').on('click', '.delete', handleDelete);
    $('#incompleteTableBody').on('click', '.statusChange', handleStatus);
};

function postTask () {
    console.log('submit button click');
    let taskObject = {
        task: $('#new-task').val(),
        status: 'work to do'
    };
    $.ajax({
        type: 'POST',
        url: 'taskLibrary',
        data: taskObject
    }).then( function (response) {
        $('#new-task').val('')
        getTasks();
    })
};

function getTasks() {
    $('#incompleteTableBody').empty();
    $.ajax({
        type: 'GET',
        url: '/taskLibrary'
    }).then( function (response) {
        console.log('GET /tasklibrary response', response);
        for (let i = 0; i < response.length; i++) {
            $('#incompleteTableBody').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].task}</td>
                    <td>
                        <p id="status-change-label" for="status-change">${response[i].status}</p>
                        <button class="status-change">complete</button>
                    </td>
                    <td>
                        <p id="delete-label" for="delete">delete task</p>
                        <button class="delete">delete</button>
                    </td>
                </tr>
            `)
        }
        for(let i = 0; i < response.length; i++) {
            if (response[i].status == "completed") {
                console.log('change complete');
                $('#status-change-label').parent().addClass("left-color'");
            }
            else if (response[i].status == "work to do"){
                console.log('no backbround change');
            }
        }
    })
};

function handleDelete() {
    console.log('delete button clicked');
    const id = $(this).parent().parent().data('id');
    $.ajax({
        type: 'DELETE',
        url: `/taskLibrary/${id}`
    }).then( function () {
        getTasks();
    }).catch(function(error) {
        console.log('error deleting, ', error);
    })
};

function handleStatus() {
    console.log('task completed');
    const id = $(this).parent().parent().data('id');
    $.ajax({
        type: 'PUT',
        url: `/taskLibrary/status/${id}`,
        data: {state: 'completed'}
    }).then( function (){
        getTasks();
    }).catch( function(error) {
        console.log('put error, ', error);
    })
};