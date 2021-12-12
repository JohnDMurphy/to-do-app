const ul = document.querySelector('#the-list');
const inputText = document.querySelector('#my-input');
const addBtn = document.querySelector('#my-btn');

// Creates all elements and add`s Todo
function createTodo(){

    text = inputText.value;

    // If no text in the input field do nothing
    if(text === '') {
        return;
    };

    let li = document.createElement('li');
    li.classList.add('todo-item')

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    let par = document.createElement('p');
    par.textContent = text;
    par.classList.add('para');

    let delBtn = document.createElement('i')
    delBtn.classList.add('del');
    delBtn.innerHTML = '&cross;';

    li.appendChild(checkbox);
    li.appendChild(par);
    li.appendChild(delBtn);
    ul.appendChild(li);

    // Reset input field after adding todo
    inputText.value = '';

}

// Deletes selected Todo
ul.addEventListener('click', function(e) {
    
   if(e.target.tagName === 'I'){
       e.target.parentElement.remove();    
   }    
  
});

// Toggle compleate on selected Todo
ul.addEventListener('change', function(e) {
    if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
        e.target.nextElementSibling.classList.toggle('done');
    }
});

// Add`s Todo when button is pressed
addBtn.addEventListener('click', createTodo);

// Add`s Todo when enter is pressed
inputText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createTodo();
    }
});