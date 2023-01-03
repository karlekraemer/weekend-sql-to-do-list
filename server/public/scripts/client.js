$(document).ready(onReady);

//making the onReady function

function onReady() {
    console.log('we ready');
    getTasks();
    $('#submit').on('click', postTask);
}

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
    });
}

function getTasks() {
    $('#incompleteTableBody').empty();
    $.ajax({
        type: 'GET',
        url: '/taskLibrary'
    }).then( function (response) {
        console.log('GET /tasklibrary response', response);
        for (let i = 0; i < response.length; i++) {
            $('#incompleteTableBody').append(`
                <tr data=id${response[i].id}>
                    <td>${response[i].task}</td>
                    <td>
                        <p id="status-change-label" for="status-change">${response[i].status}</p>
                        <button class="status-cahnge">done</button>
                    </td>
                    <td>
                        <p id="delete-label" for="delete">delete task</p>
                        <button class="delete">delete</buton>
                    </td>
                </tr>
            `)
        }
        for(let i = 0; i < response.length; i++) {
            if (response[i].status = "completed") {
                console.log('change complete');
                $('#status-change-label').parent().addClass('left-color');
            }
            else if (response[i].status == "work to do"){
                console.log('no backbround change');
            }
        }
    });
}