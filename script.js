document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task description cannot be empty.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.className = 'task';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = taskText;
    newTask.appendChild(taskDescription);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        newTask.classList.toggle('complete');
    });

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newDescription = prompt('Edit your task:', taskDescription.textContent);
        if (newDescription !== null && newDescription.trim() !== '') {
            taskDescription.textContent = newDescription.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    newTask.appendChild(taskActions);
    taskList.appendChild(newTask);

    taskInput.value = '';
});