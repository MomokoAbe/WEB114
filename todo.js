const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add an event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Code the "Add Item" button function:
function addTask() {
// Get the task text from the input field.
const taskText = taskInput.value.trim();

// Check if the input is empty. If empty, display an alert message.
if (taskText === "") {
    alert("Please enter a task!");
     return;
    }

// Create a new list item (<li>) element.
const listItem = document.createElement('li');
listItem.textContent = taskText;

// Create a remove button.
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';

// Add an event listener to the remove button to remove the list item.
removeButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
});

// Append the remove button the list item.
listItem.appendChild(removeButton);

// Append the list item to the task list.
taskList.appendChild(listItem);

// Clear the input field.
taskInput.value = "";
}