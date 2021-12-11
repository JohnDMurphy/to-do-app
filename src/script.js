const input = document.querySelector('.my-input');
const btn = document.querySelector('.my-btn');
const dels = document.querySelectorAll('.del');
const checkbox = document.querySelectorAll('.checkbox');
const listItem = document.querySelectorAll('.todo-item')



dels.forEach((del, i) => {
    del.addEventListener('click', function(){
        this.parentNode.remove();
    })
})