/* seleziono gli elementi */
let taskText = document.getElementById('task-text');
let taskBtn = document.getElementById('add-task-btn');
let taskListItem = document.getElementById('task-list-item');
console.log(taskListItem);

/* prendi il testo del task e aggiungilo alla lista dei task */
taskBtn.addEventListener('click', () => {
    let taskAdd = taskText.value;
    let el = document.createElement('li');
    el.classList.add("list-group-item");
    el.textContent = taskAdd;
    taskListItem.appendChild(el);
    // pulisci l'input dei task
    taskText.value = "";

}) 