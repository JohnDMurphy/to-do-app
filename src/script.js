const input = document.querySelector('.my-input');
const btn = document.querySelector('.my-btn');
const del = document.querySelector('.del');
const checkbox = document.querySelector('.checkbox');
const listItem = document.querySelector('.todo-item')



checkbox.addEventListener('change', function(){
    if(checkbox.checked) {
        listItem.classList.toggle('done');
    } else {
        listItem.classList.toggle('done');
    }
})