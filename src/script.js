const input = document.querySelector('.my-input');
const btn = document.querySelector('.my-btn');
const dels = document.querySelectorAll('.del');
const checkbox = document.querySelectorAll('.checkbox');
const listItem = document.querySelectorAll('.todo-item')


// Deletes selected list item
dels.forEach((del, i) => {
    del.addEventListener('click', function(){
        this.parentNode.remove();
    })
})

// Checks of selected list item
checkbox.forEach((check, i) => {
    check.addEventListener('change', function() {
        if(check.checked){
            check.nextElementSibling.classList.toggle("done");
        } else {
            check.nextElementSibling.classList.toggle("done");
        }
    })
})