/* seleziono gli elementi */
let taskText = document.getElementById('task-text');
console.log(taskText);
let taskBtn = document.getElementById('add-task-btn');

/*stampa in console il testo al premere del bottone */
taskBtn.addEventListener('click', () => {
    console.log(taskText.value);
    taskText.value = "";
}) 